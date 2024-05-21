"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import SubmitButton from "@/components/SubmitButton";
import { login } from "@/actions/auth";

const LoginForm = ({ setStep, setCellphone }) => {
  const [stateLogin, formActionLogin] = useFormState(login, {});

  useEffect(() => {
    toast(stateLogin?.message, { type: `${stateLogin?.status}` });
    if (stateLogin?.status === "success") {
      setStep(2);
    }
  }, [stateLogin]);


  const handleCellphoneChange = (event) => {
    setCellphone(event.target.value);
  };

  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionLogin}>
          <div className="mb-3">
            <label className="form-label">شماره موبایل</label>
            <input
              name="cellphone"
              type="text"
              className="form-control"
              onChange={handleCellphoneChange}
            />
          </div>
          <SubmitButton title="ورود" className="btn btn-primary btn-auth" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
