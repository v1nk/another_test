import React from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';

const Container = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    max-width: 100vw;

    ${breakpoints.medium} {
        margin-left: 48px;
        margin-right: 48px;
    }

    ${breakpoints.large} {
        margin-left: 88px;
        margin-right: 88px;
    }
`;


export default function InnerContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}