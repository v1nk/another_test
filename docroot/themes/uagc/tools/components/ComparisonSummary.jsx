import React from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";
import DegreeCard from "./DegreeCard";

const OuterContainer = styled(animated.div)`
  position: fixed;
  top: 100%; // start below the screen so we can animate in
  left: 0;
  width: 100%;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.$isShown ? "1" : "0")};
  background-color: #d0d0ce;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px 0;
  margin: 0 auto;

  ${breakpoints.medium} {
    padding: 32px 0;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 32px;
    margin-right: 32px;
  }

  ${breakpoints.large} {
    margin-left: 88px;
    margin-right: 88px;
  }
`;

const HelperText = styled.p`
  color: #0c234b;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
`;

const HelperCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f0;
  background: #0c234b;
  border-radius: 32px;
  padding: 0px 8px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(14)};
  line-height: ${pixelsToRems(18)};
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 16px;

  ${breakpoints.medium} {
    display: none;
  }
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 24px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 16px;

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  ${breakpoints.medium} {
    padding-right: 0;
    overflow-x: hidden;
    margin-bottom: 0;
    width: 75%;
  }
`;

const CardsPlaceholders = styled.div`
  display: none;
  position: absolute;
  padding: 0 24px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${breakpoints.medium} {
    display: flex;
    padding-right: 0;
  }
`;

const CardPlaceholder = styled.div`
  border: 1px dashed #98a4ae;
  box-sizing: border-box;
  border-radius: 16px;
  height: 100%;
  width: calc((100% / 3) - (32px / 2) - (24px / 3));

  &:not(:last-of-type) {
    margin-right: 32px;
  }
`;

const ActionsContainer = styled.div`
  display: ${(props) => (props.$hideOnMobile ? "none" : "flex")};
  justify-content: space-between;
  padding: 0 24px;

  ${breakpoints.medium} {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    width: 25%;
  }
`;

const RemoveAllButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #0c234b;

  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    border: none;
  }

  ${breakpoints.medium} {
    font-weight: 500;
  }
`;

const CompareDegreesButton = styled.button`
  background: #ef9600;
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #0c234b;

  &:hover,
  &:active,
  &:focus {
    background-color: #ef9600;
    border: none;
  }

  svg {
    margin-left: 10px;
  }

  ${breakpoints.medium} {
    margin-bottom: 16px;
    width: 100%;
  }
`;

export default function ComparisonSummary(props) {
  const [containerRef, containerBounds] = useMeasure();

  const containerY = () => {
    if (
      props.degrees.length > 0 &&
      (props.stepIndex === 3 || props.stepIndex === 2)
    ) {
      return -containerBounds.height;
    } else {
      return 0;
    }
  };

  const animationStyles = useSpring({ y: containerY() });

  const goToComparison = () => {
    if (props.degrees.length >= 2) {
      props.setStep(4);
      window.scrollTo(0, 0);
    } else {
      console.warn(
        "Cannot go to comparison because there are not at least 2 degrees to compare"
      );
    }
  };

  return (
    <OuterContainer
      ref={containerRef}
      $isShown={props.degrees.length > 0}
      style={animationStyles}
    >
      <Container>
        <TopInfo>
          <HelperText>Compare up to 3 degrees</HelperText>
          <HelperCount>{props.degrees.length} of 3</HelperCount>
        </TopInfo>
        <CardsContainer>
          <CardsPlaceholders>
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
          </CardsPlaceholders>
          {props.degrees.map((degree) => {
            return (
              <DegreeCard
                degree={degree}
                degrees={props.degrees}
                setDegrees={props.setDegrees}
                key={degree}
                isInResultsScreen={false}
                isActive={true}
                isOnResultsDesktop={false}
                allowRemove={true}
              />
            );
          })}
        </CardsContainer>
        <ActionsContainer $hideOnMobile={props.degrees.length < 2}>
          <RemoveAllButton onClick={() => props.setDegrees([])}>
            Remove All
          </RemoveAllButton>
          <CompareDegreesButton
            onClick={() => goToComparison()}
            disabled={props.degrees.length < 2}
          >
            Compare Degrees
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#0C234B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CompareDegreesButton>
        </ActionsContainer>
      </Container>
    </OuterContainer>
  );
}
