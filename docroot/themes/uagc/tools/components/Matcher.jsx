import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import pixelsToRems from '../helpers/pixelsToRems';
import degreeFinderData from '../helpers/degreeFinderData';
import Question from './Question';

const Container = styled.div`
    display: ${props => props.$step < 0 ? 'none' : 'grid'};
    opacity: ${props => props.$step < 1 ? '0' : '1'};
    transition: opacity 0.2s;
    position: relative;
    width: 100%;
    max-width: 100%;

    .swiper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .swiper-pagination {
        position: relative;
        bottom: unset !important;
        order: 1;
        margin-top: 0;
    }

    .swiper-pagination-bullet {
        background: #0C234B !important;
        margin: 0 8px 16px !important;

        ${breakpoints.medium} {
            margin: 0 8px 32px !important;
        }
    }

    // Red line at the top
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 40px);
        height: 2px;
        width: 80px;
        background-color: #AB1F23;
        display: none;

        ${breakpoints.medium} {
            display: block;
        }
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    ${breakpoints.medium} {
        justify-content: flex-start;
    }
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: #FFFFFF;
    border: 1px solid #0C234B;
    border-radius: 20px;
    color: #0C234B;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(16)};
    line-height: ${pixelsToRems(24)};
    transition: opacity 0.2s;
    opacity: ${props => props.$currentStep > 1 ? '1' : '0'} !important;

    &:hover, &:active, &:focus, &:focus-visible {
        background-color: #FFFFFF;
        border: 1px solid #0C234B;
    }

    svg {
        margin-right: 8px;
    }
`;

export default function Matcher(props) {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(props.step - 1);
        }
    }, [props.step])

    const goToPreviousStep = () => {
        props.setStep(props.step - 1);

        // If the amount of archetypePoint arrays exceeds how many should exist
        // in the current step, we need to pop the last one saved off the stack.

        if (props.archetypePoints.length >= props.step - 1) {
            props.archetypePoints.pop(); // Pop last array in archetypePoints
            props.setArchetypePoints(props.archetypePoints);
        }
    }

    return (
        <Container $step={props.step}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={32}
                slidesPerView={1}
                allowTouchMove={false}
                pagination={{ clickable: false }}
                onSwiper={setSwiper}
                autoHeight={true}
            >
                {degreeFinderData.map((question, questionIndex) => {
                    return (
                        <SwiperSlide key={questionIndex}>
                            <Question question={question} questionIndex={questionIndex} archetypePoints={props.archetypePoints} setArchetypePoints={props.setArchetypePoints} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <ButtonContainer>
                <BackButton onClick={() => goToPreviousStep()} $currentStep={props.step} disabled={props.step <= 1}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 10H4.16663" stroke="#0C234B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99996 15.8334L4.16663 10.0001L9.99996 4.16675" stroke="#0C234B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </BackButton>
            </ButtonContainer>
        </Container>
    )
}