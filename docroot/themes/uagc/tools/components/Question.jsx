import React from 'react';
import styled from 'styled-components';
import breakpoints from '../helpers/breakpoints';
import pixelsToRems from '../helpers/pixelsToRems';
import AnswerButton from './AnswerButton';

const Container = styled.div`
    position: relative;
    padding: 32px 24px;

    ${breakpoints.medium} {
        padding: 80px 0px;
    }
`;

const QuestionTitle = styled.p`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelsToRems(24)};
    line-height: ${pixelsToRems(32)};
    text-align: center;
    color: #111111;
    margin-bottom: 16px;

    ${breakpoints.medium} {
        font-size: ${pixelsToRems(28)};
        line-height: ${pixelsToRems(40)};
    }
`;

const AnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    ${breakpoints.medium} {
        margin: 0 auto;
        flex-direction: row;
        max-width: 908px;
    }
`;

export default function Question(props) {

    return (
        <Container>
            <QuestionTitle>{props.question.text}</QuestionTitle>
            <AnswersContainer>
                <AnswerButton answer={props.question.answer1} archetypePoints={props.archetypePoints} setArchetypePoints={props.setArchetypePoints}  />
                <AnswerButton answer={props.question.answer2} archetypePoints={props.archetypePoints} setArchetypePoints={props.setArchetypePoints}  />
            </AnswersContainer>
        </Container>
    )
}