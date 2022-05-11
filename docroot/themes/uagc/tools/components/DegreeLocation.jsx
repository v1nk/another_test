import React from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';
import degreeData from '../helpers/degreeData';
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
    margin-bottom: 24px;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(32)};
        line-height: ${pixelsToRems(40)};
        margin-bottom: 32px;
    }

    span {
        color: #AB0520;
    }
`

const StateInput = styled.div`
    display: inline-block;
    position: relative;
    margin-bottom: 32px;
    margin-left: 1px;
`;

const StateLabel = styled.label`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(20)};
    line-height: ${pixelsToRems(24)};
    margin-top: 0;
    margin-bottom: 9px;
    color: #0C234B;
`;

const StateSelect = styled.select`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    color: #53565A;
    width: 100%;
    border: 1px solid #D0D0CE;
    border-radius: 8px;
    padding: 8px 16px;
    min-width: 260px;
`;


const StateArrowIcon = styled.svg`
    position: absolute;
    bottom: 11px;
    right: 8px;
    pointer-events: none;
`;

export default function DegreeLevel(props) {
    return (
        <Container>
            <InnerContainer>
                <Title>Where are you <span>located?</span></Title>
                <StateInput>
                    <StateLabel htmlFor="state">State</StateLabel>
                    <StateSelect onChange={(event) => props.setState(event.target.value)} value={props.state} id="state">
                        <option value="">Select Your State</option>
                        {degreeData.states.map(state => {
                            return <option value={state.a} key={state.a}>{state.n}</option>
                        })}
                    </StateSelect>
                    <StateArrowIcon width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#AB0520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </StateArrowIcon>
                </StateInput>
            </InnerContainer>
        </Container>
    )
}