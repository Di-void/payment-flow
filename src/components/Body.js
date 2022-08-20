import React from "react";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Billing from "./Billing";
import Payment from "./Payment";
import styled from "styled-components";

const Body = () => {
  return (
    <Wrapper>
      <Header />
      <PersonalInfo />
      <Billing />
      <Payment />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 1px solid black; */
  position: relative;
  padding: 0.5rem 0.5rem;
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20vh;
`;
export default Body;
