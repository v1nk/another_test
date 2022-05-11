import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';
import degreeData from '../helpers/degreeData';
import DegreeListing from './DegreeListing';

const Container = styled.div`
    width: 100%;
    overflow-y: visible;
    margin-top: 40px;
    padding-top: 40px;
    max-height: ${props => props.$isShown ? '2500px' : '0'};
    transition: max-height 3s ease-in-out;
    height: 100%;
    overflow-y: ${props => props.$isShown ? 'visible' : 'hidden'};

    &::before {
        content: '';
        background-color: #53565A;
        height: 1px;
        width: 100vw;
        position: absolute;
        left: 0;
        transform: translateY(-40px);
    }
`;

const Title = styled.h3`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    color: #111111;
    margin-bottom: 24px;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(20)};
        line-height: ${pixelsToRems(24)};
        margin-bottom: 32px;
    }
`

export default function DegreeComparison(props) {

    const [validDegrees, setValidDegrees] = useState([]);

    const filterDegrees = (degreeLevel, degreeInterests) => {

        // Get state data for selected state
        const selectedStateCode = props.state;
        const selectedStateData = degreeData.states.find(state => state.a === selectedStateCode);
        const selectedStatePossibleDegrees = selectedStateData.d; // array of degree IDs

        // Filter by selected state data
        const degreesForState = degreeData.degrees.filter(degree => selectedStatePossibleDegrees.includes(degree.ci))

        // Filter by degree level and discipline
        const filteredDegrees = degreesForState.filter(degree => {
            const degreeName = degree.n;
            const degreeElements = degreeName.split(' in ');

            if (degreeElements.length == 2) {
                const degreeDiscipline = degreeElements[0]; // e.g. 'BA', 'MA', 'AA' 

                // Figure out the degree level from the name
                let thisDegreeLevel = null;

                if (degreeDiscipline == "BA" || degreeDiscipline == "BS") {
                    thisDegreeLevel = "Bachelors";
                } else if (degreeDiscipline == "MA" || degreeDiscipline == "MS" || degreeDiscipline == "Master of Science") {
                    thisDegreeLevel = "Masters";
                } else if (degreeDiscipline == "Doctor of Philosophy" || degreeDiscipline == "PhD") {
                    thisDegreeLevel = "Doctorals";
                }

                // Test if the degree level matches
                if (thisDegreeLevel) {
                    if (degreeLevel == thisDegreeLevel) {
                        const thisDegreeInterest = degree.in;

                        const foundInterest = degreeInterests.find(degreeInterest => {
                            if (degreeInterest.id == -1) {
                                return true;
                            }
                            return degreeInterest.id === thisDegreeInterest;
                        });

                        if (foundInterest != undefined) {
                            return true;
                        }
                    }
                }
            }

            return false;
        })

        setValidDegrees(filteredDegrees);
    }

    useEffect(() => {
        filterDegrees(props.degreeLevel, props.degreeInterests)
    }, [props.degreeLevel, props.degreeInterests])

    return (
        <Container $isShown={props.isShown}>
            {validDegrees.length > 0 ?
                <>
                    <Title>Select up to three degree programs below and compare</Title>
                    <DegreeListing validDegrees={validDegrees} degrees={props.degrees} setDegrees={props.setDegrees} degreeMeta={props.degreeMeta} />
                </>
                :
                <p>No results found</p>
            }
        </Container>
    )
}