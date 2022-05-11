import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import Back from './Back';
import Loading from './Loading';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';
import degreeData from '../helpers/degreeData';
import DegreeComparison from './DegreeComparison';
import InnerContainer from './InnerContainer';

const Container = styled.div`
    position: relative;
    width: calc(100% / 4);
    display: inline-block;
    vertical-align: top;
    padding-top: 40px;
    overflow-x: hidden;
`;

const Title = styled.h2`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(26)};
    line-height: ${pixelsToRems(32)};
    color: #0C234B;
    margin-top: 24px;
    margin-bottom: 32px;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(32)};
        line-height: ${pixelsToRems(40)};
    }

    span {
        color: #AB0520;
    }
`

const FitersLabel = styled.p`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    color: #000000;
    margin-bottom: 16px;
`;

const FilterButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function DegreeInterests(props) {

    // There can be many degree interests. Handle adding to existing here.
    // We need to account for special treatment of the "All Degrees" button.
    // "All Degrees" being enabled will disabled all other filters. 
    // Likewise, enabling any other filter will disable "All Degrees".
    const setDegreeInterest = (degreeInterest) => {
        const foundIndex = props.degreeInterests.findIndex(existingDegreeInterest => {
            // To compare two objects in JS, we can stringify them first.
            if (JSON.stringify(existingDegreeInterest) === JSON.stringify(degreeInterest)) {
                return true;
            }
        }); // -1 if not found

        if (foundIndex == -1) {
            if (JSON.stringify(degreeInterest) === JSON.stringify({ name: "All Degrees", id: -1 })) {
                // If enabling All Degrees, disable other filters
                props.setDegreeInterests([{ name: "All Degrees", id: -1 }]); // arbitrary id that isn't used in the dataset.
            } else {
                // Not found, so append to array. But first, check if "All Degrees" is set and remove it if so
                const foundAllDegreesIndex = props.degreeInterests.findIndex(existingDegreeInterest => {
                    if (JSON.stringify(existingDegreeInterest) === JSON.stringify({ name: "All Degrees", id: -1 })) {
                        return true;
                    }
                });

                if (foundAllDegreesIndex == -1) {// Not found
                    const newDegreeInterest = {
                        name: degreeInterest,
                        id: -1 // arbitrary id that isn't used in the dataset.
                    }
                    props.setDegreeInterests([...props.degreeInterests, degreeInterest]);
                } else {
                    let newDegreeInterests = props.degreeInterests.slice(); // First copy array because arrays are special in JS
                    newDegreeInterests.splice(foundAllDegreesIndex, 1) // Remove at index
                    props.setDegreeInterests([...newDegreeInterests, degreeInterest]);
                }
            }
        } else {
            let newDegreeInterests = props.degreeInterests.slice(); // First copy array 
            newDegreeInterests.splice(foundIndex, 1) // Remove at index
            props.setDegreeInterests(newDegreeInterests);
        }
    }

    return (
        <Container>
            <InnerContainer>
                <Back setStep={props.setStep} currentStep={2} />
                <Title>Choose your <span>Area of Interest</span></Title>
                <FitersLabel>Select up all that apply</FitersLabel>
                <FilterButtons>
                    <FilterButton name="All Degrees" currentValues={props.degreeInterests} setValues={setDegreeInterest} key={-1} id={-1} />
                    {degreeData.interests.map(interest => {
                        if (interest.n != "Undecided" && interest.n != "Communications" && interest.n != "Political Science") {
                            return <FilterButton name={interest.n} currentValues={props.degreeInterests} setValues={setDegreeInterest} key={interest.i} id={interest.i} />
                        }
                    })}
                </FilterButtons>
                {props.degreeInterests.length > 0 && props.degreeMeta != null &&
                    <DegreeComparison state={props.state} degreeLevel={props.degreeLevel} degreeInterests={props.degreeInterests} degrees={props.degrees} setDegrees={props.setDegrees} degreeMeta={props.degreeMeta} isShown={props.stepIndex === 2 || props.stepIndex === 3} />
                }
                {props.degreeInterests.length > 0 && props.degreeMeta == null &&
                    <Loading />
                }
            </InnerContainer>
        </Container>
    )
}