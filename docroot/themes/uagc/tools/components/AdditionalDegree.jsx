import React, { useState } from "react";
import styled from "styled-components";
import pixelsToRems from "../helpers/pixelsToRems";
import degreeData from "../helpers/degreeData";

const Container = styled.div`
  width: 100%;
  border: 1px solid #98a4ae;
  border-radius: 16px;
  padding: 24px;
  height: calc(100% - 32px);
  margin-top: 32px;
`;

const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const SelectLabel = styled.label`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(11)};
  line-height: ${pixelsToRems(16)};
  margin-top: 0;
  color: #53565a;
`;

const Select = styled.select`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #0c234b;
  width: 100%;
  border-bottom: 1px solid #98a4ae;
`;

const SelectArrowIcon = styled.svg`
  position: absolute;
  bottom: 11px;
  right: 8px;
`;

const AddDegreeProgramButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 24px;
  background: #0c234b;
  border: none;
  border-radius: 20px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #ffffff;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;

  &:hover,
  &:active,
  &:focus {
    background-color: #0c234b;
    border: none;
  }
`;

const CompareOtherProgramLevels = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #0c234b;
  width: 100%;

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    border: none;
  }
`;

export default function AdditionalDegree(props) {
  const [selectedInterest, setSelectedInterest] = useState(0);
  const [selectedDegree, setSelectedDegree] = useState(-1);

  // Get state data for selected state
  const selectedStateCode = props.state;

  const selectedStateData = degreeData.states.find(
    (state) => state.a === selectedStateCode
  );

  let selectedStatePossibleDegrees = []; // array of degree IDs

  if (selectedStateData) {
    selectedStatePossibleDegrees = selectedStateData.d;
  }

  // Filter by selected state data
  const degreesForState = degreeData.degrees.filter((degree) =>
    selectedStatePossibleDegrees.includes(degree.ci)
  );

  // Filter degrees to remove ones already chosen.
  const possibleDegrees = degreesForState.filter(
    (degree) => !props.degrees.includes(degree.ci)
  );

  // Filter by degree level
  const matchingLevelDegrees = possibleDegrees.filter((degree) => {
    const degreeName = degree.n;
    const degreeElements = degreeName.split(" in ");

    if (degreeElements.length == 2) {
      const degreeDiscipline = degreeElements[0]; // e.g. 'BA', 'MA', 'AA'

      // Figure out the degree level from the name
      let thisDegreeLevel = null;

      if (degreeDiscipline == "BA" || degreeDiscipline == "BS") {
        thisDegreeLevel = "Bachelors";
      } else if (
        degreeDiscipline == "MA" ||
        degreeDiscipline == "MS" ||
        degreeDiscipline == "Master of Science"
      ) {
        thisDegreeLevel = "Masters";
      } else if (
        degreeDiscipline == "Doctor of Philosophy" ||
        degreeDiscipline == "PhD"
      ) {
        thisDegreeLevel = "Doctorals";
      }

      // Test if the degree level matches
      if (thisDegreeLevel == props.degreeLevel) {
        return true;
      } else {
        return false;
      }
    }
  });

  // Filter by interest
  const degreesForInterest = matchingLevelDegrees.filter(
    (degree) => degree.in == selectedInterest && degree.n != "Undecided"
  );

  const addDegree = () => {
    props.setDegrees([...props.degrees, parseInt(selectedDegree)]);
  };

  return (
    <Container>
      <SelectContainer>
        <SelectLabel htmlFor="area-of-interest">Area of Interest</SelectLabel>
        <Select
          onChange={(event) => setSelectedInterest(event.target.value)}
          value={selectedInterest}
          id="area-of-interest"
        >
          {degreeData.interests.map((interest) => {
            if (interest.n !== "Undecided") {
              return (
                <option value={interest.i} key={interest.i}>
                  {interest.n}
                </option>
              );
            }
          })}
        </Select>
        <SelectArrowIcon width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M4.5 6.75L9 11.25L13.5 6.75"
            stroke="#0C234B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SelectArrowIcon>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel htmlFor="degree-program">Degree Program</SelectLabel>
        <Select
          onChange={(event) => setSelectedDegree(event.target.value)}
          value={selectedDegree}
          id="degree-program"
        >
          <option value={-1}>Degree Program</option>
          {degreesForInterest.map((degree) => {
            return (
              <option value={degree.ci} key={degree.ci}>
                {degree.n}
              </option>
            );
          })}
        </Select>
        <SelectArrowIcon width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M4.5 6.75L9 11.25L13.5 6.75"
            stroke="#0C234B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SelectArrowIcon>
      </SelectContainer>
      <AddDegreeProgramButton
        onClick={(event) => addDegree()}
        disabled={selectedDegree === -1}
      >
        Add Degree Program
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M16.6663 5L7.49967 14.1667L3.33301 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </AddDegreeProgramButton>
      <CompareOtherProgramLevels onClick={() => props.setStep(2)}>
        Compare other program levels
      </CompareOtherProgramLevels>
    </Container>
  );
}
