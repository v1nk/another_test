import React from 'react';
import styled, { keyframes } from 'styled-components';
import breakpoints from '../helpers/breakpoints';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${breakpoints.medium} {
        margin-top: 180px;
    }

    svg {
        margin-bottom: 10px;
        animation: ${rotate} 2s linear infinite;
    }
`;

export default function Loading(props) {

    return (
        <Container>
            <svg
                width={24}
                height={24}
                fill="none"
            >
                <path
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    stroke="#0C234B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p>Loading Degrees</p>
        </Container>
    )
}