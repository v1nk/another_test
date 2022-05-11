import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';

const StepContainerButton = styled.button`
    background-color: unset;
    border: unset;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover, &:active, &:focus {
        background-color: unset;
        border: unset;
    }

    &:disabled {
        opacity: 1;
    }
    
    &:not(:last-of-type) {
        margin-right: 16px;

        ${breakpoints.medium} {
            margin-right: 24px;
        }
    }
`

const StepNumber = styled.div`
    font-family: Fira Sans;
    font-weight: 500;
    font-size: ${pixelsToRems(11)};
    line-height: ${pixelsToRems(16)};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${props => {
        if (props.$isCurrentStep) {
            return '#0C234B';
        } else if (props.$isFinishedStep) {
            return '#EF9600';
        } else {
            return '#F1F1F0';
        }
    }};
    border-radius: 50%;
    color: ${props => {
        if (props.$isCurrentStep || props.$isFinishedStep) {
            return '#FFFFFF';
        } else {
            return '#0C234B';
        }
    }};
    margin-right: 4px;
    transition: background-color 0.2s, color 0.2s;
    position: relative;
    overflow: hidden;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(14)};
        line-height: ${pixelsToRems(18)};
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
`

const StepNumberInnerContainer = styled(animated.div)`
    display: flex;
    align-items: center;
    margin-left: 8px;

    ${breakpoints.medium} {
        margin-left: 11px;
    }
    
    svg {
        margin-left: 13px;

        ${breakpoints.medium} {
            margin-left: 12px;
        }
    }
`

const StepName = styled.p`
    display:  ${props => props.$isCurrentStep ? 'block' : 'none'};
    font-family: Fira Sans;
    font-style: normal;
    font-weight: ${props => props.$isCurrentStep || props.$isFinishedStep ? '500' : '400'};
    font-size: ${pixelsToRems(14)};
    line-height: ${pixelsToRems(18)};
    color: #0C234B;
    margin: 0;

    ${breakpoints.medium} { 
        display: block;
        font-size: ${pixelsToRems(16)};
        line-height: ${pixelsToRems(24)};
    }
`

const StepNumberText = styled.span`
    width: 8px;
    text-align: center;

    ${breakpoints.medium} { 
        width: 10px;
    }
`

export default function StepIndicator(props) {
    const thisStepIndex = props.number - 1;
    const isCurrentStep = props.stepIndex === thisStepIndex;
    const isFinishedStep = props.stepIndex > thisStepIndex;

    const setStep = () => {
        if (thisStepIndex <= props.stepIndex) {
            props.setStep(thisStepIndex);
        } else {
            console.log(`Not allowing user to go to step ${thisStepIndex}`);
        }
    }

    const labelXOffset = () => {
        if (isFinishedStep) {
            return -24;
        } else {
            return 0;
        }
    }

    let finishedAnimation = useSpring({ x: labelXOffset() });

    return (
        <StepContainerButton onClick={() => setStep()} disabled={!isFinishedStep}>
            <StepNumber $isCurrentStep={isCurrentStep} $isFinishedStep={isFinishedStep}>
                <StepNumberInnerContainer style={finishedAnimation}>
                    <StepNumberText $isCurrentStep={isCurrentStep}>
                        {props.number}
                    </StepNumberText>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M13 1.5L4.75 9.75L1 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </StepNumberInnerContainer>
            </StepNumber>
            <StepName $isCurrentStep={isCurrentStep} $isFinishedStep={isFinishedStep}>{props.name}</StepName>
        </StepContainerButton>
    )
}