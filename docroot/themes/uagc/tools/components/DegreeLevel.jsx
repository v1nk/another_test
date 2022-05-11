import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import Back from './Back';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';
import InnerContainer from './InnerContainer';

const Container = styled.div`
    display: inline-block;
    position: relative;
    width: calc(100% / 4);
    vertical-align: top;
    padding-top: 40px;
`;

const Title = styled.h2`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(26)};
    line-height: ${pixelsToRems(32)};
    color: #0C234B;
    margin-bottom: 32px;
    margin-top: 24px;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(32)};
        line-height: ${pixelsToRems(40)};
        margin-top: 24px;
    }

    span {
        color: #AB0520;
    }
`;

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

export default function DegreeLevel(props) {
    return (
        <Container>
            <InnerContainer>
                <Back setStep={props.setStep} currentStep={1} />
                <Title>Choose your <span>degree level</span></Title>
                <FitersLabel>Select one</FitersLabel>
                <FilterButtons>
                    <FilterButton name="Bachelors" currentValues={props.degreeLevel} setValues={props.setDegreeLevel} />
                    <FilterButton name="Masters" currentValues={props.degreeLevel} setValues={props.setDegreeLevel} />
                    <FilterButton name="Doctorals" currentValues={props.degreeLevel} setValues={props.setDegreeLevel} />
                </FilterButtons>
            </InnerContainer>
        </Container>
    )
}