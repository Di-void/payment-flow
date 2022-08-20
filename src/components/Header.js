import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Header = () => {
  // STATE VALUES
  const { activePage } = useGlobalContext();
  // FUNCTIONS AND SIDE EFFECTS

  return (
    <Wrapper>
      <div className="title">
        <h1>Complete your Purchase</h1>
      </div>

      <div className="tabs-container">
        <div className="tabs-center">
          <div className={`${activePage === 1 ? "active" : "tab"}`}>
            <h2>Personal info</h2>
          </div>
          <div className={`${activePage === 2 ? "active" : "tab"}`}>
            <h2>Billing info</h2>
          </div>
          <div className={`${activePage === 3 ? "active" : "tab"}`}>
            <h2>Confirm Payment</h2>
          </div>
        </div>
      </div>

      <hr className="demac" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  /* border: 1px solid black; */
  margin-bottom: 50px;
  .title {
    margin-bottom: 30px;
    h1 {
      color: #4e598c;
      text-align: left;
      font-size: 25px;
    }
  }

  .tabs-container {
    /* border: 1px solid black; */
    .tabs-center {
      /* border: 1px solid black; */
      display: flex;
      justify-content: space-between;

      .tab {
        padding-bottom: 10px;
        h2 {
          text-transform: capitalize;
          color: #bdbdbd;
          font-size: 24px;
        }
      }

      .active {
        padding-bottom: 10px;
        border-bottom: 8px solid #f2994a;
        border-radius: 5px;
        h2 {
          text-transform: capitalize;
          color: #f2994a;
          font-size: 24px;
        }
      }
    }
  }

  .demac {
    margin-top: -4px;
  }
`;
export default Header;
