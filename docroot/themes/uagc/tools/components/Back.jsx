import React from 'react';
import styled from 'styled-components';
import pixelsToRems from '../helpers/pixelsToRems';

const BackButton = styled.button`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    border: none;
    color: #AB0520;

    &:hover, &:active, &:focus {
        background-color: transparent;
        border: none;
    }

    svg {
        margin-right: 10px;
    }
`;

export default function Back(props) {

    const goBack = () => {
        props.setStep(props.currentStep - 1);
    }

    return (
        <BackButton onClick={() => goBack()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="#AB0520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
        </BackButton>
    )
}