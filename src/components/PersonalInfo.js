import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  // STATE VALUES
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { activePage, advance } = useGlobalContext();
  const states = ["Lagos", "Ibadan", "Ogun", "Imo"];
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    lga: "",
    state: states[0],
  });
  // FUNCTIONS AND SIDE EFFECTS
  const onSubmit = () => {
    // console.log(data);
    if (Object.keys(errors).length === 0) {
      advance(2);
    }
  };
  return (
    <Wrapper className={`${activePage === 1 ? "active-form" : "inactive"}`}>
      <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
        <div className="name-box">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="form-control">
            <input
              type="text"
              {...register("fullName", { required: true })}
              id="name"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className=""
              placeholder="Your Full Name"
            />
            {errors.fullName && (
              <p style={{ color: "red" }}>Please check the Full Name</p>
            )}
          </div>
        </div>
        <div className="email-box">
          <label className="label" htmlFor="email">
            Email Address <span>*</span>
          </label>
          <p>The purchase receipt would be sent to this address</p>
          <div className="form-control">
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              id="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className=""
              placeholder="john@example.com"
            />
            {errors.email && (
              <p style={{ color: "red" }}>Please check the Email</p>
            )}
          </div>
        </div>
        <div className="address-one-box">
          <label className="label" htmlFor="address-1">
            Address 1
          </label>
          <div className="form-control">
            <input
              type="text"
              {...register("addressOne", { required: true })}
              id="address-1"
              value={inputs.addressOne}
              onChange={(e) =>
                setInputs({ ...inputs, addressOne: e.target.value })
              }
              className=""
              placeholder="No 7, Wright Example Street, Lagos."
            />
            {errors.addressOne && (
              <p style={{ color: "red" }}>Please check the Address field</p>
            )}
          </div>
        </div>
        <div className="address-two-box">
          <label className="label" htmlFor="address-2">
            Address 2
          </label>
          <div className="form-control">
            <input
              type="text"
              {...register("addressTwo")}
              id="address-2"
              value={inputs.addressTwo}
              onChange={(e) =>
                setInputs({ ...inputs, addressTwo: e.target.value })
              }
              className=""
              placeholder="No 7, Wright Example Street, Lagos."
            />
          </div>
        </div>
        <div className="lga-box">
          <div className="lga-sel">
            <label>Local Government</label>
            <div>
              <input
                type="text"
                {...register("lga", { required: true })}
                value={inputs.lga}
                onChange={(e) => setInputs({ ...inputs, lga: e.target.value })}
                placeholder="Surulere"
              />
              {errors.lga && (
                <p style={{ color: "red" }}>
                  Please check the Local Government Field
                </p>
              )}
            </div>
          </div>

          <div className="state-sel">
            <label>State</label>
            <div>
              <select
                name="states"
                id="states"
                value={inputs.state}
                onChange={(e) =>
                  setInputs({ ...inputs, state: e.target.value })
                }
              >
                {states.map((state, index) => {
                  return (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  );
                })}
              </select>
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
  /* opacity: 1; */
  transition: display 0.3s linear;

  .form-box > div {
    margin-bottom: 30px;
    /* border: 1px solid black; */

    label {
      font-weight: 700;
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

  .email-box {
    label {
      span {
        color: #f2994a;
      }
    }
    p {
      color: #817e9e;
      margin-top: 6px;
    }
  }

  .lga-box {
    display: flex;
    justify-content: space-between;

    .lga-sel {
      /* border: 1px solid black; */
      width: 54%;
      input {
        font-weight: 400;
        font-size: 20px;
        border: 1px solid #4e598c;
        outline: none;
        width: 100%;
        border-radius: 10px;
        padding: 1rem 0.5rem;
      }

      div {
        margin-top: 15px;
      }
    }

    .state-sel {
      width: 30%;
      /* border: 1px solid black; */

      select {
        background: transparent;
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
      div {
        margin-top: 15px;
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

export default PersonalInfo;
