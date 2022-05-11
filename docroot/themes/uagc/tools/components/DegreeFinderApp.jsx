import React, { useState, useEffect } from "react";
import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";
import Matcher from "./Matcher";

const TopArea = styled.div`
  display: ${(props) => (props.$currentStep >= 0 ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 0;

  ${breakpoints.medium} {
    display: flex;
    padding: 0;
  }
`;

const TopAreaIcon = styled.svg`
  width: ${(props) => (props.$currentStep >= 0 ? "64px" : "80px")};
  height: ${(props) => (props.$currentStep >= 0 ? "64px" : "80px")};
  margin-bottom: 24px;
  transition: height 0.5s, width 0.5s, margin-bottom 0.5s;

  ${breakpoints.medium} {
    width: ${(props) => (props.$currentStep >= 0 ? "80px" : "104px")};
    height: ${(props) => (props.$currentStep >= 0 ? "80px" : "104px")};
    margin-bottom: ${(props) => (props.$currentStep >= 0 ? "24px" : "16px")};
  }
  border-radius: 50%;
  box-shadow: 0px 4px 24px 0px #00000029;
`;

const TopAreaMobile = styled.div`
  display: ${props => props.$currentStep >= 0 ? "flex" : "none"};
  height: 80px;
  width: 100%;
  background-color: #0C234B;
  align-items: center;
  padding: 0 24px;

  ${breakpoints.medium} {
    display: none;
  }
`;

const TopAreaIconMobileContainer = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 24px 0px #00000029;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

const TopAreaIconMobile = styled.svg`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) =>
    props.$currentStep >= 0 ? pixelsToRems(20) : pixelsToRems(32)};
  line-height: ${(props) =>
    props.$currentStep >= 0 ? pixelsToRems(24) : pixelsToRems(40)};
  text-align: center;
  color: #0c234b;
  margin-bottom: ${(props) =>
    props.$currentStep >= 0 ? pixelsToRems(24) : pixelsToRems(32)};
  transition: font-size 0.5s, line-height 0.5s, margin-bottom 0.5s;

  span {
    color: #ab0520;
  }

  ${breakpoints.medium} {
    font-size: ${(props) =>
    props.$currentStep >= 0 ? pixelsToRems(24) : pixelsToRems(48)};
    line-height: ${(props) =>
    props.$currentStep >= 0 ? pixelsToRems(32) : pixelsToRems(56)};
    margin-bottom: 24px;
  }
`;

const TitleMobile = styled.h1`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #ffffff;
  margin-left: 8px;
`;

const IntroArea = styled.div`
  display: ${(props) => (props.$currentStep >= 1 ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.$currentStep >= 0 ? 0 : 1)};
  transition: opacity 0.2s;
  pointer-events: ${(props) => (props.$currentStep >= 0 ? "none" : "all")};
`;

const IntroText = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${pixelsToRems(20)};
  line-height: ${pixelsToRems(24)};
  text-align: center;
  color: #111111;
  margin-bottom: 0;
  padding: 0 24px;

  ${breakpoints.medium} {
    font-size: ${pixelsToRems(24)};
    line-height: ${pixelsToRems(32)};
    padding: 0;
  }

  ${breakpoints.large} {
    max-width: 967px;
  }
`;

const StartButton = styled.button`
  padding: 8px 8px 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 44px;
  width: 150px;
  align-items: center;
  border: none;
  background-color: #ef9600;
  border-radius: 22px;;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(16)};
  line-height: ${pixelsToRems(24)};
  color: #0c234b;
  margin-top: 24px;

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
    padding-left: 24px;
    padding-right: 16px;
  }
`;

export default function DegreeFinderApp() {
  const [step, setStep] = useState(-1);
  const [archetypePoints, setArchetypePoints] = useState([]); // Entrepreneur, Nurturer, Analyst, Educator. Will be an array of arrays, one inner array per question

  const startMatcher = () => {
    setStep(0);

    setTimeout(() => {
      setStep(1);
    }, 200);
  };

  const handleSettingArchetypePoints = (newArchetypePoints) => {
    setArchetypePoints(newArchetypePoints);

    if (newArchetypePoints.length === 9) {
      // Once we have all 9 answers
      /* CALCULATE ARCHETYPE */

      // prev: [0, 1, 1, -1]
      // next: [1, 1, 0, 0]
      // total: [1, 2, 1, -1]

      const finalScores = newArchetypePoints.reduce(
        (previousArchetypePoints, currentArchetypePoints) => {
          return [
            previousArchetypePoints[0] + currentArchetypePoints[0],
            previousArchetypePoints[1] + currentArchetypePoints[1],
            previousArchetypePoints[2] + currentArchetypePoints[2],
            previousArchetypePoints[3] + currentArchetypePoints[3],
          ];
        }
      );

      const highestScore = Math.max(...finalScores);
      const highestScoreIndex = finalScores.findIndex(
        (archetypeScore) => archetypeScore === highestScore
      );
      const archetypes = ["Entrepreneur", "Nurturer", "Analyst", "Educator"];

      if (archetypes[highestScoreIndex] == "Entrepreneur") {
        window.location = "/online-degrees/find-your-degree/entrepreneur";
      }
      if (archetypes[highestScoreIndex] == "Nurturer") {
        window.location = "/online-degrees/find-your-degree/nurturer";
      }
      if (archetypes[highestScoreIndex] == "Analyst") {
        window.location = "/online-degrees/find-your-degree/analyst";
      }
      if (archetypes[highestScoreIndex] == "Educator") {
        window.location = "/online-degrees/find-your-degree/educator";
      }
    } else if (newArchetypePoints.length > archetypePoints.length) {
      // only go to next step if we have increased number of archetype points
      setStep(step + 1);
    }
  };

  return (
    <>
      <TopAreaMobile $currentStep={step}>
        <TopAreaIconMobileContainer>
          <TopAreaIconMobile viewBox="0 0 25 24" fill="none">
            <path d="M2.48274 4.5C2.66044 4.5 2.81032 4.64593 2.81032 4.83333C2.81032 5.02074 2.66044 5.16667 2.48274 5.16667C2.30503 5.16667 2.15515 5.02074 2.15515 4.83333C2.15515 4.64593 2.30503 4.5 2.48274 4.5Z" stroke="#AB0520"/>
            <path d="M4.96553 4.5C5.14323 4.5 5.29311 4.64593 5.29311 4.83333C5.29311 5.02074 5.14323 5.16667 4.96553 5.16667C4.78782 5.16667 4.63794 5.02074 4.63794 4.83333C4.63794 4.64593 4.78782 4.5 4.96553 4.5Z" stroke="#AB0520"/>
            <path d="M7.44831 4.5C7.62602 4.5 7.7759 4.64593 7.7759 4.83333C7.7759 5.02074 7.62602 5.16667 7.44831 5.16667C7.27061 5.16667 7.12073 5.02074 7.12073 4.83333C7.12073 4.64593 7.27061 4.5 7.44831 4.5Z" stroke="#AB0520"/>
            <mask id="path-4-inside-1_2111_100849" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 21H0.83894C0.375529 21 0 20.6175 0 20.1455L3.25952e-05 2.85448C3.25952e-05 2.38248 0.375561 2 0.838972 2H17.1611C17.6245 2 18 2.56222 18 3.03422V10"/>
            </mask>
            <path d="M0 20.1455L-1 20.1455V20.1455H0ZM3.25952e-05 2.85448L1.00003 2.85448V2.85448H3.25952e-05ZM6 20H0.83894V22H6V20ZM0.83894 20C0.945034 20 1 20.0826 1 20.1455H-1C-1 21.1524 -0.193976 22 0.83894 22V20ZM1 20.1455L1.00003 2.85448L-0.999967 2.85448L-1 20.1455L1 20.1455ZM1.00003 2.85448C1.00003 2.91739 0.945067 3 0.838972 3V1C-0.193944 1 -0.999967 1.84758 -0.999967 2.85448H1.00003ZM0.838972 3H17.1611V1H0.838972V3ZM17.1611 3C17.069 3 17.004 2.97116 16.974 2.95324C16.9472 2.93719 16.946 2.92918 16.9584 2.94556C16.9701 2.96092 16.9831 2.98396 16.9921 3.00925C17.0015 3.03542 17 3.04541 17 3.03422H19C19 2.55588 18.8194 2.08848 18.5502 1.73466C18.2862 1.38765 17.8134 1 17.1611 1V3ZM17 3.03422V10H19V3.03422H17Z" fill="#AB0520" mask="url(#path-4-inside-1_2111_100849)"/>
            <path d="M0 7H17.3793" stroke="#AB0520"/>
            <path d="M21.4416 10H6.55841C6.25001 10 6 10.2094 6 10.4677V12.5323C6 12.7906 6.25001 13 6.55841 13H21.4416C21.75 13 22 12.7906 22 12.5323V10.4677C22 10.2094 21.75 10 21.4416 10Z" stroke="#AB0520"/>
            <path d="M21.4416 19H6.55841C6.25001 19 6 19.2094 6 19.4677V21.5323C6 21.7906 6.25001 22 6.55841 22H21.4416C21.75 22 22 21.7906 22 21.5323V19.4677C22 19.2094 21.75 19 21.4416 19Z" stroke="#AB0520"/>
            <rect x="4" y="13" width="20" height="6" rx="1" stroke="#AB0520" strokeLinejoin="round"/>
            <path d="M6 15L17 15" stroke="#AB0520"/>
            <path d="M6 17H13" stroke="#AB0520"/>
            <path d="M19 16L20 17L22 15" stroke="#AB0520" strokeLinejoin="bevel"/>
          </TopAreaIconMobile>
        </TopAreaIconMobileContainer>
        <TitleMobile>Find a Degree that <br/>Ignites Your Passion</TitleMobile>
      </TopAreaMobile>
      <TopArea $currentStep={step}>
        <TopAreaIcon
          $currentStep={step}
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 80.59 80.59"
        >
          <defs>
            <mask
              id="mask"
              x="20.15"
              y="23.34"
              width="30.73"
              height="32.32"
              maskUnits="userSpaceOnUse"
            >
              <g transform="translate(-0.2 -0.2)">
                <g
                  id="path-5-inside-1_1899:28724"
                  data-name="path-5-inside-1 1899:28724"
                >
                  <path
                    d="M30.93,54.86H22.7a1.35,1.35,0,0,1-1.34-1.37V25.91a1.35,1.35,0,0,1,1.34-1.36h26c.74,0,1.34.9,1.34,1.65V37.31"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </mask>
          </defs>
          <path
            d="M40.5.2h0A40.3,40.3,0,0,1,80.8,40.5h0A40.3,40.3,0,0,1,40.5,80.8h0A40.3,40.3,0,0,1,.2,40.5h0A40.3,40.3,0,0,1,40.5.2Z"
            transform="translate(-0.2 -0.2)"
            fill="#0c234b"
          />
          <path
            d="M25.32,28.24a.83.83,0,0,1,.82.83.82.82,0,0,1-1.64,0A.83.83,0,0,1,25.32,28.24Z"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M29.28,28.24a.83.83,0,0,1,.82.83.82.82,0,0,1-1.64,0A.83.83,0,0,1,29.28,28.24Z"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M33.24,28.24a.83.83,0,0,1,.82.83.82.82,0,0,1-1.64,0A.83.83,0,0,1,33.24,28.24Z"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <g mask="url(#mask)">
            <path
              d="M21.36,53.49h0Zm0-27.58h0Zm9.57,27.94H22.7v2h8.23Zm-8.23,0a.34.34,0,0,1-.33-.36h-2a2.36,2.36,0,0,0,2.35,2.37Zm-.33-.36V25.91h-2V53.49Zm0-27.58a.34.34,0,0,1,.33-.35v-2a2.36,2.36,0,0,0-2.35,2.37Zm.33-.35h26v-2h-26Zm26,0s0,0,.15.14a.93.93,0,0,1,.18.5h2a2.94,2.94,0,0,0-.6-1.72,2.24,2.24,0,0,0-1.75-.94Zm.33.64V37.31h2V26.2Z"
              transform="translate(-0.2 -0.2)"
              fill="#fff"
            />
          </g>
          <path
            d="M21.36,32.52H49.08"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M55.56,37.31H31.82a.83.83,0,0,0-.89.75v3.29a.83.83,0,0,0,.89.75H55.56a.83.83,0,0,0,.89-.75V38.06A.83.83,0,0,0,55.56,37.31Z"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M55.56,51.67H31.82a.83.83,0,0,0-.89.74V55.7a.83.83,0,0,0,.89.75H55.56a.83.83,0,0,0,.89-.75V52.41A.83.83,0,0,0,55.56,51.67Z"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <rect
            x="27.54"
            y="41.89"
            width="31.9"
            height="9.57"
            rx="1.01"
            fill="none"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="1.01"
          />
          <path
            d="M30.93,45.29H48.48"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M30.93,48.48H42.1"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeWidth="1.01"
          />
          <path
            d="M51.67,46.88l1.59,1.6,3.19-3.19"
            transform="translate(-0.2 -0.2)"
            fill="none"
            stroke="#fff"
            strokeLinejoin="bevel"
            strokeWidth="1.01"
          />
        </TopAreaIcon>
        <Title $currentStep={step}>
          Find a Degree that <span>Ignites Your Passion</span>
        </Title>
      </TopArea>
      <IntroArea $currentStep={step}>
        <IntroText>
          Our online degree finder quiz will help you to discover the degree that fits both your personal and professional goals and helps you to uncover your potential.
        </IntroText>
        <StartButton onClick={() => startMatcher()}>
          Start Now
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M4.66675 10H16.3334"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 4.16675L16.3333 10.0001L10.5 15.8334"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StartButton>
      </IntroArea>
      <Matcher
        step={step}
        setStep={setStep}
        archetypePoints={archetypePoints}
        setArchetypePoints={handleSettingArchetypePoints}
      />
    </>
  );
}
