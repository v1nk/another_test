import React from "react";
import styled from "styled-components";
import "regenerator-runtime/runtime";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";

const Button = styled.button`
  position: relative;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  color: #ab0520;
  transition: color 0.2s;
  white-space: nowrap;
  align-self: flex-end;
  border: 0;
  border-radius: 20px;
  margin-top: 24px;
  height: 40px;

  &:hover {
    background-color: transparent;
    color: #0c234b;
    border: 0;
  }
  &:active,
  &:focus {
    background-color: transparent;
    color: #ab0520;
    border: 0;
  }

  svg {
    margin-left: 10px;

    path {
      stroke: #ab0520;
    }
  }

  ${breakpoints.medium} {
    margin-top: 0;
  }
`;

export default function AddToCompareButton(props) {
  const currentlyAdded = props.degrees.includes(props.degreeId);
  const toggleDegreeToCompare = () => {
    if (currentlyAdded) {
      // Remove degree from degrees

      const degreeIndex = props.degrees.findIndex(
        (degree) => degree == props.degreeId
      );
      if (degreeIndex != -1) {
        const newDegrees = props.degrees.slice(); // First copy array because arrays are special in JS
        newDegrees.splice(degreeIndex, 1);
        props.setDegrees(newDegrees);
      }
    } else {
      // Add degree to degrees

      props.setDegrees([...props.degrees, props.degreeId]);
    }
  };

  return (
    <Button
      onClick={() => toggleDegreeToCompare()}
      $isCurrentlyAdded={currentlyAdded}
      disabled={props.degrees.length === 3 && !currentlyAdded}
    >
      <div>{currentlyAdded ? "Remove" : "Add to compare"}</div>
      {currentlyAdded && (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path
            d="M15 5L5 15"
            stroke="#0C234B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke="#0C234B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Button>
  );
}
