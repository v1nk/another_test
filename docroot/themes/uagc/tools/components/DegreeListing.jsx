import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DegreeListItem from './DegreeListItem';
import DegreePagination from './DegreePagination';

const Container = styled.div`

`;

export default function DegreeListing(props) {
    const [pageIndex, setPageIndex] = useState(0);
    
    const resultCount = props.validDegrees.length;
    const resultsPerPage = 6;
    const pageCount = Math.ceil(resultCount / resultsPerPage);

    const resultsCursor = pageIndex * resultsPerPage; // where we start grabbing results from.
    const resultsForPage = props.validDegrees.slice(resultsCursor, resultsCursor + resultsPerPage);

    useEffect(() => {
        setPageIndex(0); // Any time the result set changes let's go to page 0
    }, [props.validDegrees])

    return (
        <Container>
            {resultsForPage && resultsForPage.map(degree => {
                if (degree.n != "Undecided") {
                    return <DegreeListItem key={degree.ci} degreeId={degree.ci} name={degree.n} degrees={props.degrees} setDegrees={props.setDegrees} degreeMeta={props.degreeMeta} />;
                }
            })}
            <DegreePagination pageCount={pageCount} pageIndex={pageIndex} setPageIndex={setPageIndex}  />
        </Container>
    )
}