import React from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "./Vector.svg";
import { useGlobalContext } from "../context";

const Final = () => {
  // STATE VALUES
  const { activePage, advance } = useGlobalContext();
  return (
    <Wrapper className={`${activePage === 4 ? "active-form" : "inactive"}`}>
      <div className="background"></div>
      <div className="header">
        <div className="icon">
          <ReactLogo />
        </div>
        <h1>Purchase Completed</h1>
      </div>

      <div className="body">
        <p>
          Please check your mail for details concerning
          <br /> this transaction
        </p>

        <div>
          {/* eslint-disable-next-line */}
          <a href="#" className="ret-link" onClick={() => advance(1)}>
            Return Home
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20vh auto 0 auto;
  background-color: white;
  width: 50vw;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  border-radius: 10px;
  padding: 2rem 1.5rem;

  .background {
    height: 100%;
    z-index: -1;
    position: absolute;
    left: -0.62%;
    right: 0.21%;
    top: -0.41%;
    bottom: 40.91%;
    background: linear-gradient(
      180deg,
      rgba(242, 201, 76, 0.2) 0%,
      rgba(242, 153, 74, 0.2) 100%
    );
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);
  }
  .header {
    margin-bottom: 50px;
    .icon {
      margin: 0 auto;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
    }

    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 67px;
      color: #4e598c;
    }
  }

  .body {
    margin-left: 80px;
    width: 70%;

    p {
      color: #4f4f4f;
      margin-bottom: 40px;
    }

    div {
      a {
        color: #f2994a;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-decoration: underline;
      }
    }
  }
  /* .background {
    height: 100%;
    z-index: -1;
    position: absolute;
    left: -0.62%;
    right: 0.21%;
    top: -0.41%;
    bottom: 40.91%;
    background: linear-gradient(
      180deg,
      rgba(242, 201, 76, 0.2) 0%,
      rgba(242, 153, 74, 0.2) 100%
    );
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);
  } */
`;
export default Final;
