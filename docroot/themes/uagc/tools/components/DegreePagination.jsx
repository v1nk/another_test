import React from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';


const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: 48px;
    margin-bottom: 64px;
    max-width: 100%;

    ${breakpoints.medium} {
        margin-top: 24px;
        margin-bottom: 16px;
    }

    ${breakpoints.large} {
        margin-bottom: 80px;
    }
`;

const LeftButton = styled.button`
    margin-right: 16px;
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    flex-shrink: 0;

    &:hover, &:active, &:focus {
        background-color: transparent;
        border: none;
    }
`;

const RightButton = styled.button`
    margin-left: 16px;
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    flex-shrink: 0;

    &:hover, &:active, &:focus {
        background-color: transparent;
        border: none;
    }
`;

const PageButtonsContainer = styled.div`
    display: flex;
`;

const PageButton = styled.button`
    width: 40px;
    height: 40px;
    border: 1px solid ${props => props.$isCurrentPage ? '#EF9600' : '#D0D0CE'};
    border-radius: 20px;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    transition: border-color 0.2s;

    &:not(:last-of-type) {
        margin-right: 8px;
    }

    &:hover, &:active, &:focus {
        background-color: transparent;
        border: 1px solid ${props => props.$isCurrentPage ? '#EF9600' : '#D0D0CE'};
        border-radius: 20px;
    }

    &:hover {
        border: 1px solid #EF9600;
    }
`;

export default function DegreePagination(props) {

    var pageButtons = [];

    for (let index = 0; index < props.pageCount; index++) {
        const isCurrentPage = props.pageIndex === index;
        pageButtons.push(<PageButton key={index} $isCurrentPage={isCurrentPage} onClick={() => props.setPageIndex(index)}>{ index + 1 }</PageButton>)
    }

    return (
        <Container>
            <LeftButton onClick={() => props.setPageIndex(props.pageIndex - 1)} disabled={props.pageIndex === 0}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M15.5 18L9.5 12L15.5 6" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </LeftButton>
            <PageButtonsContainer>
                { pageButtons }
            </PageButtonsContainer>
            <RightButton onClick={() => props.setPageIndex(props.pageIndex + 1)} disabled={props.pageIndex === props.pageCount - 1}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18L15.5 12L9.5 6" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </RightButton>
        </Container>
    );
}