import React, { useState } from "react";
import styled from "styled-components";
import Cleave from "cleave.js/react";
import { useGlobalContext } from "../context";
import { useForm } from "react-hook-form";

const Billing = () => {
  // STATE VALUES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { advance, activePage } = useGlobalContext();
  const options = ["Visa", "Mastercard"];
  const [cardName, setCardName] = useState("");
  // eslint-disable-next-line
  const [creditCardNo, setCreditCardNo] = useState("");
  // eslint-disable-next-line
  const [creditCardExpiryDate, setCreditCardExpiry] = useState("");
  const [creditCardType, setcreditCardType] = useState(options[0]);

  // FUNCTIONS AND SIDE EFFECTS
  const onSubmit = () => {
    // console.log(data);
    if (Object.keys(errors).length === 0) {
      advance(3);
    }
  };

  return (
    <Wrapper className={`${activePage === 2 ? "active-form" : "inactive"}`}>
      <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label" htmlFor="name">
            Name on Card <span>*</span>
          </label>
          <div className="form-control">
            <input
              type="text"
              {...register("nameOnCard", { required: true })}
              id="name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
            />
            {errors.nameOnCard && (
              <p style={{ color: "red" }}>Please check the Name field</p>
            )}
          </div>
        </div>

        <div>
          <div className="card-sel">
            <label htmlFor="card-type">
              Card Type <span>*</span>
            </label>
            <div>
              <select
                id="card-type"
                value={creditCardType}
                onChange={(e) => setcreditCardType(e.target.value)}
              >
                {options.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="card-dets">
          <div className="first">
            <label className="label" htmlFor="name">
              Card Details <span>*</span>
            </label>
            <div className="form-control">
              <Cleave
                options={{
                  creditCard: true,
                }}
                onChange={(e) => setCreditCardNo(e.target.rawValue)}
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
          </div>

          <div className="second">
            <label className="label" htmlFor="name">
              Expiry Date <span>*</span>
            </label>
            <div className="form-control">
              <Cleave
                placeholder="MM/DD"
                options={{ date: true, datePattern: ["m", "d"] }}
                onChange={(e) => setCreditCardExpiry(e.target.rawValue)}
              />
            </div>
          </div>

          <div className="third">
            <label className="label" htmlFor="name">
              CVV <span>*</span>
            </label>
            <div className="form-control">
              <Cleave
                options={{ blocks: [3], numericOnly: true }}
                placeholder="XXX"
              />
            </div>
          </div>
        </div>

        <div className="footer">
          <button type="submit" className="next-btn">
            Next
          </button>

          <button type="button" className="cancel">
            Cancel Payment
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 1px solid black; */
  position: absolute;
  transition: display 0.3s linear;

  .form-box > div {
    margin-bottom: 30px;
    /* border: 1px solid black; */

    label {
      font-weight: 700;

      span {
        color: #f2994a;
      }
    }
    .form-control {
      width: 100%;
      /* border: 1px solid black; */
      margin-top: 15px;

      input {
        font-weight: 400;
        font-size: 20px;
        border: 1px solid #4e598c;
        outline: none;
        width: inherit;
        border-radius: 10px;
        padding: 1rem 0.5rem;
      }
    }
  }

  .card-sel {
    select {
      margin-top: 15px;
      background: white;
      appearance: none;
      background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position-x: 90%;
      background-position-y: 17px;
      width: 100%;
      border: 1px solid #4e598c;
      border-radius: 10px;
      padding: 1rem 0.5rem;
      font-weight: 400;
      font-size: 20px;
    }
  }

  .card-dets {
    display: flex;
    justify-content: space-between;

    .first {
      width: 45%;

      .form-control {
        input {
          text-align: center;
        }
      }
    }
    .second {
      /* border: 1px solid black; */
      width: 20%;

      label {
        display: flex;
        justify-content: center;
      }

      input {
        text-align: center;
      }
    }

    .third {
      width: 10%;
      label {
        display: flex;
        justify-content: center;
      }

      input {
        text-align: center;
      }
    }
  }

  .footer {
    /* border: 1px solid black; */

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
export default Billing;
