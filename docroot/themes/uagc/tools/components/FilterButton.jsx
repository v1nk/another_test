import React from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import 'regenerator-runtime/runtime';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';

const Button = styled(animated.button)`
    position: relative;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(14)};
    line-height: ${pixelsToRems(18)};
    background-color: ${props => props.$isCurrentlyEnabled ? '#0C234B' : 'transparent'};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;
    border: 1px solid #0C234B;
    border-radius: 4px;
    color: ${props => props.$isCurrentlyEnabled ? '#FFFFFF' : '#0C234B'};
    transition: color 0.2s, background-color 0.2s;
    margin-bottom: 8px;
    white-space: nowrap;

    &:hover, &:active, &:focus {
        background-color: ${props => props.$isCurrentlyEnabled ? '#0C234B' : 'transparent'};
        border-color: #0C234B;
    }

    &:not(:last-of-type) {
        margin-right: 8px;

        ${breakpoints.medium} {
            margin-right: 16px;
        }
    }

    svg {
        opacity: ${props => props.$isCurrentlyEnabled ? '1' : '0'};
        position: absolute;
        right: 11px;
        margin-top: -3px;
        transition: opacity 0.3s;
    }
`;


export default function FilterButton(props) {
    let isCurrentlyEnabled = props.currentValues === props.name;

    // Check if we need to check against an array of values
    if (Array.isArray(props.currentValues)) {
        const matchingIndex = props.currentValues.find(degreeInterest => {
            return JSON.stringify(degreeInterest) === JSON.stringify({ name: props.name, id: props.id });
        })

        if (matchingIndex != undefined) {
            isCurrentlyEnabled = true;
        }
    }

    const [textRef, textBounds] = useMeasure();

    const buttonWidth = () => {
        const borderWidth = 2;
        const buttonHorizontalPadding = 32;

        if (textBounds.width > 0) {
            if (isCurrentlyEnabled) {
                const svgWidth = 14;
                const svgLeftMargin = 8;
                
                return textBounds.width + buttonHorizontalPadding + borderWidth + svgWidth + svgLeftMargin;
            } else {
                return textBounds.width + buttonHorizontalPadding + borderWidth;
            }
        }
    }

    let springAnimation = useSpring({ width: buttonWidth() })

    const toggleActive = () => {
        if (props.currentValues === props.name) {
            props.setValues(null);
        } else {

            // For degree interests, we'll need to track the id too
            if (props.id != null) {
                props.setValues({ name: props.name, id: props.id });
            } else {
                props.setValues(props.name);
            }
        }
    }

    return (
        <Button onClick={() => toggleActive()} $isCurrentlyEnabled={isCurrentlyEnabled} style={springAnimation}>
            <div ref={textRef}>
                {props.name}
            </div>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path d="M13 1.5L4.75 9.75L1 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Button>
    )
}