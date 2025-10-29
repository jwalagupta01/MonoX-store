import React from "react";
import "./Policy.css";
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbMoodCheck } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const Policy = () => {
  return (
    <div className="policy_div">
      <div className="policy px-4 mt-5 align-items-center justify-content-between">
        <div className="left_policy d-flex align-items-center flex-column bg-light rounded border p-3">
          <h1>
            <RiExchangeFundsLine />
          </h1>
          <p className="fs-6 fw-bold">Easy Exchange Policy</p>
          <p className="fs-6">
            We offer a hassle{" "}
            <span className="bg-dark text-light px-2 py-1 rounded">
              free exchange policy
            </span>
          </p>
        </div>

        <div className="middle_policy d-flex align-items-center flex-column bg-light rounded border p-3">
          <h1>
            <TbMoodCheck />
          </h1>
          <p className="fs-6 fw-bold">7 Days Return</p>
          <p className="fs-6">
            We Provide{" "}
            <span className="bg-dark text-light px-2 py-1 rounded">
              7 Days Reurn Policy
            </span>
          </p>
        </div>

        <div className="right_policy d-flex align-items-center flex-column bg-light rounded border p-3">
          <h1>
            <MdOutlineSupportAgent />
          </h1>
          <p className="fs-6 fw-bold">Best customer support</p>
          <p>
            we provide{" "}
            <span className="bg-dark text-light px-2 py-1 rounded">
              24/7 customer support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
