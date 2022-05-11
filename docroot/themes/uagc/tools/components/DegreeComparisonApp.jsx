import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DegreeLocation from "./DegreeLocation";
import DegreeLevel from "./DegreeLevel";
import DegreeInterests from "./DegreeInterests";
import Results from "./Results";
import ComparisonSummary from "./ComparisonSummary";
import breakpoints from "../helpers/breakpoints";
import usePrevious from "../hooks/usePrevious";

const StepsContainer = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100%;
`;

const Steps = styled.div`
  width: 400%;
  position: relative;
  transform: ${(props) => {
    if (props.stepIndex < 3) {
      return "translateX(calc(" + props.stepIndex + " * (-1 / 4) * 100%));";
    } else {
      return (
        "translateX(calc(" + (props.stepIndex - 1) + " * (-1 / 4) * 100%));"
      );
    }
  }};
  transition: transform 1s ease-in-out;
  will-change: transform;
`;

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [state, setState] = useState(""); // State meaning state within the country
  const [degreeLevel, setDegreeLevel] = useState(null);
  const [degreeInterests, setDegreeInterests] = useState([]); // These are the filters by college/interest
  const [degrees, setDegrees] = useState([]); // These are the actual degrees added to compare
  const [degreeMeta, setDegreeMeta] = useState(null); // stores data from json API
  const previousAmount = usePrevious({ stepIndex });
  const topRef = useRef(); // used for scrolling to top when changing steps

  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();

      myHeaders.append("Authorization", `Basic YXNoZm9yZDphc2hmb3Jk`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "/jsonapi/node/degree?include=field_degree_finder_fields",
        requestOptions
      );
      let data = await response.json();

      // if there is another page of results, the link for the additional request is included in this response.
      const nextPageRequestURL = data.links?.next?.href;

      if (nextPageRequestURL) {
        const responseTwo = await fetch(nextPageRequestURL, requestOptions);
        let dataTwo = await responseTwo.json();

        // now append additional data to existing data to end up with one object
        data.data.push(...dataTwo.data);
        data.included.push(...dataTwo.included);
      }

      setDegreeMeta(data);
    };
    fetchData();
  }, []);

  const setStep = (index) => {
    setStepIndex(index);
  };

  const stickyShow = new Event("stickyShow");
  const stickyHide = new Event("stickyHide");

  useEffect(() => {
    console.log("useEF1");
    console.log(degreeInterests);
    if (degreeInterests.length > 0 && degreeLevel) {
      setStep(3);
      console.log("setStep 3");
    } else if (degreeLevel && state.length > 0) {
      console.log("setStep 2");
      setStep(2);
    } else if (state.length > 0) {
      setStep(1);
    } else {
      setStep(0);
    }
  }, [degreeLevel, degreeInterests, state]);

  useEffect(() => {
    console.log("useEF2");
    if (stepIndex === 3 || stepIndex === 2) {
      window.dispatchEvent(stickyShow);
    } else {
      window.dispatchEvent(stickyHide);
    }
    // Check if the stepIndex dropped
    if (previousAmount && previousAmount.stepIndex > stepIndex) {
      if (stepIndex == 0) {
        setState("");
        setDegreeLevel(null);
        setDegreeInterests([]);
        setDegrees([]);
      } else if (stepIndex == 1) {
        setDegreeLevel(null);
        setDegreeInterests([]);
        setDegrees([]);
      } else if (stepIndex == 2) {
        setDegrees([]);
      }
    }
  }, [stepIndex]);

  return (
    <div ref={topRef}>
      <StepsContainer>
        <Steps stepIndex={stepIndex}>
          <DegreeLocation state={state} setState={setState} />
          <DegreeLevel
            degreeLevel={degreeLevel}
            setDegreeLevel={setDegreeLevel}
            setStep={setStep}
          />
          <DegreeInterests
            state={state}
            degreeLevel={degreeLevel}
            degreeInterests={degreeInterests}
            setDegreeInterests={setDegreeInterests}
            degrees={degrees}
            setDegrees={setDegrees}
            degreeMeta={degreeMeta}
            stepIndex={stepIndex}
            setStep={setStep}
          />
          <Results
            degreeLevel={degreeLevel}
            degrees={degrees}
            setDegrees={setDegrees}
            state={state}
            degreeInterests={degreeInterests}
            setDegreeInterests={setDegreeInterests}
            stepIndex={stepIndex}
            setStep={setStep}
            degreeMeta={degreeMeta}
          />
        </Steps>
      </StepsContainer>
      <ComparisonSummary
        degrees={degrees}
        setDegrees={setDegrees}
        stepIndex={stepIndex}
        setStep={setStep}
      />
    </div>
  );
}
