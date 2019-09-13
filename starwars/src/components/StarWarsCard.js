import React from "react";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
//   CardImg
} from "reactstrap";

import styled from "styled-components";

const CardContainer = styled.div``;

const StarWarsCard = props => {
  return (
    <CardContainer>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>{props.name}</CardTitle>
            {/* <CardImg
              top
              width="100%"
              src="https://source.unsplash.com/random"
              alt="random unsplash image"
            /> */}
            <CardText>Height: {props.height}</CardText>
            <CardText>Weight: {props.mass}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Hair Color: {props.hair_color}</CardText>
            <Button>Nerd out!</Button>
          </Card>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default StarWarsCard;
