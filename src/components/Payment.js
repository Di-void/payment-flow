import React from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "./Vector.svg";
import { useGlobalContext } from "../context";

const Payment = () => {
  // STATE VALUES
  const { activePage, advance } = useGlobalContext();
  // FUNCTIONS AND SIDE EFFECTS
  return (
    <Wrapper className={`${activePage === 3 ? "active-form" : "inactive"}`}>
      <div className="section">
        <div className="section-header">
          <h1>Item Name</h1>

          <h1>
            <ReactLogo className="logo" />
            Price
          </h1>
        </div>

        <div className="section-center">
          <div>
            <h1>Data science and usability</h1>

            <h1 className="total-sum">50,000.00</h1>
          </div>
          <div>
            <h1>Shipping</h1>

            <h1 className="shipping-fee">0.00</h1>
          </div>

          <hr />

          <div className="balance">
            <h1 className="total-txt">Total</h1>

            <h1 className="total-sum">50,000.00</h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="next-btn" onClick={() => advance(4)}>
          Pay
        </button>

        <button type="button" className="cancel">
          Cancel Payment
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  transition: display 0.3s linear;
  .section {
    background-color: white;
    box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
    border-radius: 10px;
    padding-bottom: 2rem;
    overflow: hidden;

    .section-header {
      color: white;
      background-color: #2f80ed;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 6rem;
      margin-bottom: 40px;
      .logo {
        margin-right: 20px;
      }

      h1 {
        font-size: 20px;
        line-height: 30px;
      }

      & :nth-child(1) {
        margin-left: -30px;
      }
    }

    .section-center {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      gap: 2.5em;
      h1 {
        font-weight: 400;
        color: #4e598c;
      }
      .total-sum {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #4e598c;
      }
      div {
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
      }

      .shipping-fee {
        color: black;
      }
      hr {
        width: 95%;
        margin: 0 auto;
      }

      .balance {
        border: 1px solid #817e9e;
        border-radius: 5px;
        padding: 0.5rem 1.5rem;
        margin: 0 auto;
        width: 90%;
        .total-txt {
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #817e9e;
        }
      }
    }
  }

  .footer {
    /* border: 1px solid black; */
    margin: 40px 0;

    button {
      cursor: pointer;
    }
    .next-btn {
      width: 180px;
      border: transparent;
      padding: 0.5rem 1rem;
      color: white;
      font-size: 20px;
      line-height: 30px;
      background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
      border-radius: 10px;
    }

    .cancel {
      margin-left: 70px;
      border: transparent;
      background: transparent;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #4e598c;
    }
  }
`;
export default Payment;
