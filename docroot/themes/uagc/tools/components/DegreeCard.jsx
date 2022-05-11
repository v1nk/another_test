import React, { useState, useEffect } from "react";
import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";
import degreeData from "../helpers/degreeData";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.$isActive ? "#0C234B" : "#FFFFFF")};
  border-radius: 16px;
  padding: 16px;
  width: ${(props) => (props.$isInSlider ? "auto" : "260px")};
  height: ${(props) => (props.$isInSlider ? "100%" : "auto")};
  flex-shrink: 0;
  transition: background-color 0.2s;

  &:not(:last-of-type) {
    margin-right: 16px;
  }

  ${breakpoints.medium} {
    &:not(:last-of-type) {
      margin-right: ${(props) => (props.$isOnResultsDesktop ? "0" : "32px")};
    }

    width: ${(props) =>
      props.$isOnResultsDesktop
        ? "calc((100% / 3) - (64px / 3))"
        : "calc((100% / 3) - (32px / 2) - (24px / 3))"};
  }
`;

const Title = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  margin-right: 8px;
  color: ${(props) => (props.$isActive ? "#FFFFFF" : "#0C234B")};
  margin-bottom: 0;
  transition: color 0.2s;

  ${breakpoints.medium} {
    font-size: ${pixelsToRems(20)};
    line-height: ${pixelsToRems(24)};
  }
`;

const RemoveButton = styled.button`
  display: ${(props) => (props.$shown ? "flex" : "none")};
  background-color: transparent;
  padding: 0;
  align-items: flex-start;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    border: none;
  }
`;

export default function DegreeCard(props) {
  const degreeInfo = degreeData.degrees.find(
    (degree) => degree.ci == props.degree
  );

  const removeDegree = () => {
    const degreeIndex = props.degrees.findIndex(
      (degree) => degree == props.degree
    );
    if (degreeIndex != -1) {
      const newDegrees = props.degrees.slice(); // First copy array because arrays are special in JS
      newDegrees.splice(degreeIndex, 1);
      props.setDegrees(newDegrees);
    }
  };

  return (
    <Container
      $isInSlider={props.isInSlider}
      $isActive={props.isActive}
      $isOnResultsDesktop={props.isOnResultsDesktop}
    >
      <Title $isActive={props.isActive}>{degreeInfo.n}</Title>
      <RemoveButton onClick={() => removeDegree()} $shown={props.allowRemove}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18"
            stroke="#98A4AE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#98A4AE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </RemoveButton>
    </Container>
  );
}
