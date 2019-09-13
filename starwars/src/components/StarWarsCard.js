import React from "react";

import {
//   Card,
//   Button,
//   CardTitle,
//   CardText,
  Row,
  Col,
//   CardImg
} from "reactstrap";

import styled from "styled-components";

const StarCard = styled.div`
height: 600px;
width: 400px;
background-image: linear-gradient(red, yellow);
border-radius: 10%;
display: flex;
justify-content: center;
flex-direction: column;
justify-content: space-evenly;
flex-wrap: wrap;
margin: 3rem auto;
box-shadow: 5px 5px #888888;
padding: 20px;
`;

const StarTitle = styled.h1`
font-size: 3rem;
`;

const StarText = styled.p`
font-size: 2rem;
`;

const CardContainer = styled.div``;

const StarButton = styled.button`
  text-align: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  /* pass props. if primary then #fff else #2a2223 */
  background: ${props => (props.primary ? "#ffffff" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#ffffff")};
  border: 0;
  margin: 5px 10px;
  border-radius: 10px;
  /* Transition makes the jump from hover color changes 
  look a lot better and less jumpy */
  transition: 0.2s ease-in;
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fffff")};
    color: ${props => (props.primary ? "#ffffff" : "#2a2223")};
  }
`;

const StarWarsCard = props => {
  return (
 
    <CardContainer>
      <Row>
        <Col sm="6">
          <StarCard body>
            <StarTitle>{props.name}</StarTitle>
            {/* <CardImg
              top
              width=""
              src=""
              alt=""
            /> */}
            <StarText>Height: {props.height}</StarText>
            <StarText>Weight: {props.mass}</StarText>
            <StarText>Gender: {props.gender}</StarText>
            <StarText>Hair Color: {props.hair_color}</StarText>
            <div>
            <StarButton primary >Like!</StarButton>
            <StarButton primary >Comment</StarButton>
            </div>
          </StarCard>
        </Col>
      </Row>
    </CardContainer>
   
  );
};

export default StarWarsCard;
