import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DegreeCard from "./DegreeCard";
import DegreeInfo from "./DegreeInfo"; // only used on mobile
import DegreesInfoArea from "./DegreesInfoArea"; // only used on tablet and desktop
import AdditionalDegree from "./AdditionalDegree";
import Back from "./Back";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";
import { Pagination, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import degreeData from "../helpers/degreeData";
import InnerContainer from "./InnerContainer";

const Container = styled.div.attrs((props) => ({
  currentStep: props.stepper,
}))`
  position: relative;
  display: ${(props) => (props.currentStep == 4 ? "inline-block" : "none")};

  width: calc(100% / 4);
  vertical-align: top;
  padding-top: 40px;
  margin-bottom: 32px;

  // There are only swipers on mobile
  .swiper {
    display: flex;
    flex-direction: column;
  }

  .swiper-slide {
    align-self: stretch;
    height: auto;
  }

  .swiper-pagination {
    position: relative;
    bottom: unset !important;
    order: 1;
    margin-top: 8px;
  }

  .swiper-pagination-bullet {
    background: #0c234b !important;
    margin: 0 8px 8px !important;
  }
`;

const Title = styled.h2`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(26)};
  line-height: ${pixelsToRems(32)};
  color: #0c234b;
  margin-top: 16px;
  margin-bottom: 16px;

  ${breakpoints.medium} {
    font-size: ${pixelsToRems(36)};
    line-height: ${pixelsToRems(48)};
    margin-top: 24px;
    margin-bottom: 40px;
  }

  span {
    color: #ab0520;
  }
`;

const CurrentDegreesContainerMobile = styled.div`
  width: 100%;
  opacity: ${(props) => (props.$isShown ? "1" : "0")};

  ${breakpoints.medium} {
    display: none;
  }
`;

const EmptyDegree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #f1f1f0;
  border: 1px solid #98a4ae;
  text-align: center;
  border-radius: 16px;
  color: #0c234b;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(14)};
  line-height: ${pixelsToRems(18)};
  width: ${(props) =>
    props.$isOnResultsDesktop ? "calc((100% / 3) - (64px / 3))" : "auto"};
  height: 100%;

  ${breakpoints.medium} {
    height: auto;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
  }
`;

const CurrentDegreesContainer = styled.div`
  display: none;
  width: 100%;
  opacity: ${(props) => (props.$isShown ? "1" : "0")};

  ${breakpoints.medium} {
    display: block;
  }
`;

// const DegreesHolder = styled.div.attrs((props) => ({
//   showing: true ? "true" : "false",
// }))`

const DegreesHolder = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;

  &::before {
    content: "";
    background-color: #53565a;
    height: 1px;
    width: 100vw;
    position: absolute;
    left: 0;
    transform: translateY(-40px);
  }

  ${breakpoints.large} {
    padding-left: 25%;
    background-color: #ffffff;
    z-index: 100;
  }
`;

const DegreesInfoHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DegreeInfoColumn = styled.div`
  flex-basis: calc((100% / 3) - (64px / 3));
  flex-shrink: 0;

  ${breakpoints.medium} {
    &:not(:last-of-type) {
      margin-right: 32px;
    }
  }

  ${breakpoints.large} {
    flex-basis: calc((100% / 4) - (96px / 4));
  }
`;

const Separator = styled.div`
  background-color: #53565a;
  height: 1px;
  width: 100vw;
  left: 0;
`;

export default function Results(props) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const degreesMissing = 3 - props.degrees.length;
  const emptyDegreeCards = [];
  const emptyDegreeCardsMobile = [];
  const additionalDegreeForms = [];
  const additionalDegreeFormsMobile = [];
  const resultsDegreeMeta = [];

  useEffect(() => {
    if (degreesMissing === 3 && props.stepIndex === 3) {
      props.setStep(2); // go back a step if user has removed all degrees
    }
  }, [props.degrees]);

  // Retreive and restructure degree meta data
  props.degrees.map((degreeID) => {
    const { uuid: degreeUUID } = degreeData.degrees.find(
      (degree) => degree.ci === degreeID
    );
    let thisDegreeMeta = props.degreeMeta.data.find(
      (degree) => degree.id === degreeUUID
    );
    thisDegreeMeta.simpleID = degreeID;
    const thisDegreeMetaFinderFields =
      thisDegreeMeta.relationships.field_degree_finder_fields;

    if (thisDegreeMetaFinderFields && thisDegreeMetaFinderFields.data) {
      let thisDegreeMetaFinderID = thisDegreeMetaFinderFields.data.id;

      if (thisDegreeMetaFinderID) {
        const thisDegreeMoreMeta = props.degreeMeta.included.find(
          (degreeMeta) => degreeMeta.id == thisDegreeMetaFinderID
        );

        if (thisDegreeMoreMeta) {
          thisDegreeMeta.more = {
            overview:
              thisDegreeMoreMeta.attributes.field_short_overview.processed,
            credits: thisDegreeMoreMeta.attributes.field_credits,
            time: thisDegreeMoreMeta.attributes.field_time,
            learningOutcomes:
              thisDegreeMoreMeta.attributes.field_learning_outcomes,
            potentialJobs: thisDegreeMoreMeta.attributes.field_potential_jobs,
            link: thisDegreeMeta.attributes.path.alias,
          };
        } else {
          console.log("no extra degree data for degree with id: ", degreeID);
        }
      }
    } else {
      console.log("no extra degree data for degree with id: ", degreeID);
    }

    resultsDegreeMeta.push(thisDegreeMeta);
  });

  for (let index = 0; index < degreesMissing; index++) {
    emptyDegreeCards.push(
      <EmptyDegree key={index} $isOnResultsDesktop={true}>
        Add Degree to Compare
      </EmptyDegree>
    );
    additionalDegreeForms.push(
      <DegreeInfoColumn key={index}>
        <AdditionalDegree
          degreeLevel={props.degreeLevel}
          degrees={props.degrees}
          setDegrees={props.setDegrees}
          degreeInterests={props.degreeInterests}
          setDegreeInterests={props.setDegreeInterests}
          state={props.state}
          setStep={props.setStep}
        />
      </DegreeInfoColumn>
    );
    emptyDegreeCardsMobile.push(
      <SwiperSlide key={index}>
        <EmptyDegree $isOnResultsDesktop={false}>
          Add Degree to Compare
        </EmptyDegree>
      </SwiperSlide>
    );
    additionalDegreeFormsMobile.push(
      <SwiperSlide key={index}>
        <AdditionalDegree
          degreeLevel={props.degreeLevel}
          degrees={props.degrees}
          setDegrees={props.setDegrees}
          degreeInterests={props.degreeInterests}
          setDegreeInterests={props.setDegreeInterests}
          state={props.state}
          setStep={props.setStep}
        />
      </SwiperSlide>
    );
  }

  return (
    <Container stepper={props.stepIndex}>
      <InnerContainer>
        <Back setStep={props.setStep} currentStep={4} />
        <Title>
          Comparison <span>Results</span>
        </Title>

        <CurrentDegreesContainer $isShown={degreesMissing < 3}>
          <DegreesHolder>
            {props.degrees.map((degree) => {
              return (
                <DegreeCard
                  key={degree}
                  degree={degree}
                  degrees={props.degrees}
                  setDegrees={props.setDegrees}
                  isInSlider={false}
                  isActive={true}
                  isOnResultsDesktop={true}
                  allowRemove={false}
                />
              );
            })}
            {emptyDegreeCards}
          </DegreesHolder>
          <DegreesInfoHolder>
            <DegreesInfoArea
              degrees={props.degrees}
              resultsDegreeMeta={resultsDegreeMeta}
            >
              test
            </DegreesInfoArea>
            {additionalDegreeForms}
          </DegreesInfoHolder>
        </CurrentDegreesContainer>
      </InnerContainer>
      <CurrentDegreesContainerMobile $isShown={degreesMissing < 3}>
        <InnerContainer>
          <Swiper
            modules={[Controller, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            roundLengths={true}
          >
            {props.degrees.map((degree) => {
              return (
                <SwiperSlide key={degree}>
                  {({ isActive }) => (
                    <DegreeCard
                      degree={degree}
                      degrees={props.degrees}
                      setDegrees={props.setDegrees}
                      isInSlider={true}
                      isActive={isActive}
                      isOnResultsDesktop={false}
                      allowRemove={false}
                    />
                  )}
                </SwiperSlide>
              );
            })}
            {emptyDegreeCardsMobile}
          </Swiper>
        </InnerContainer>
        <Separator />
        <InnerContainer>
          <Swiper
            modules={[Controller]}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            roundLengths={true}
          >
            {props.degrees.map((degree) => {
              return (
                <SwiperSlide key={degree}>
                  <DegreeInfo
                    degree={degree}
                    resultsDegreeMeta={resultsDegreeMeta}
                  />
                </SwiperSlide>
              );
            })}
            {additionalDegreeFormsMobile}
          </Swiper>
        </InnerContainer>
      </CurrentDegreesContainerMobile>
    </Container>
  );
}
