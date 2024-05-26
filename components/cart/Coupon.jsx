"use client";

import { toast } from "react-toastify";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";
import { checkCoupon } from "@/actions/cart";

const Coupon = ({ setCoupon }) => {
  const [state, formAction] = useFormState(checkCoupon, {});

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` });

    if (state?.status == "success") {
      setCoupon({
        code: state.code,
        percent: state.percent,
      });
    } 
  }, [state]);
  return (
    <div className="col-12 col-md-6">
      <form action={formAction} className="input-group mb-3">
        <input
          name="code"
          type="text"
          className="form-control"
          placeholder="کد تخفیف"
        />
        <SubmitButton title={"اعمال کد تخفیف"} style="input-group-text" />
      </form>
    </div>
  );
};

export default Coupon;
