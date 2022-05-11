import React from "react";
import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import pixelsToRems from "../helpers/pixelsToRems";
import degreeData from "../helpers/degreeData";
import AddToCompareButton from "./AddToCompareButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-bottom: 1px solid #98a4ae;

  ${breakpoints.medium} {
    flex-direction: row;
    justify-content: space-between;
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const TextContent = styled.div`
  ${breakpoints.medium} {
    margin-right: 32px;
  }
`;

const Title = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: ${pixelsToRems(20)};
  line-height: ${pixelsToRems(24)};
  color: #092e6c;
  margin-bottom: 0;

  ${breakpoints.medium} {
    font-size: ${pixelsToRems(24)};
    line-height: ${pixelsToRems(32)};
  }
`;

const Description = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-top: 8px;
  margin-bottom: 0;
`;

export default function DegreeListItem(props) {
  const { uuid: degreeUUID } = degreeData.degrees.find(
    (degree) => degree.ci === props.degreeId
  );

  const thisDegreeMeta = props.degreeMeta.data.find(
    (degree) => degree.id == degreeUUID
  );

  let description = "";

  if (thisDegreeMeta) {
    description = thisDegreeMeta.attributes.field_meta_tag.description;
  } else {
    console.log("failed to find meta for degree uuid: ", degreeUUID);
  }

  return (
    <Container>
      <TextContent>
        <Title>{props.name}</Title>
        {description && <Description>{description}</Description>}
      </TextContent>
      <AddToCompareButton
        degrees={props.degrees}
        setDegrees={props.setDegrees}
        degreeId={props.degreeId}
      />
    </Container>
  );
}
