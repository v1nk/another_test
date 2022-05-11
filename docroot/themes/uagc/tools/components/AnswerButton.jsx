import React from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #0C234B;
    border-radius: 16px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: ${pixelsToRems(20)};
    line-height: ${pixelsToRems(24)};
    background-color: #FFFFFF;
    flex-basis: 96px;
    flex-shrink: 0;
    transition: background-color 0.2s, color 0.2;

    &:not(:last-of-type) {
        margin-bottom: 16px;
    }

    &:hover, &:active, &:focus {
        background-color: #0C234B;
        border: 2px solid #0C234B;
        color: #FFFFFF
    }

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(24)};
        line-height: ${pixelsToRems(32)};
        margin-bottom: 0;
        flex-basis: 50%;
        height: 160px;
        flex-shrink: 1;
        padding: 0 60px;

        &:not(:last-of-type) {
            margin-bottom: 0;
            margin-right: 32px;
        }
    }

    ${breakpoints.large} {
        padding: 0 66px;
    }
`;

export default function AnswerButton(props) {
    
    const saveAnswer = () => {
        props.setArchetypePoints([...props.archetypePoints, props.answer.points])
    };

    return <ButtonContainer onClick={() => saveAnswer()}>{props.answer.text}</ButtonContainer>
}