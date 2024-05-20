"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";

async function login(stateLogin, formData) {
  const cellphone = formData.get("cellphone");

  if (cellphone === "") {
    return {
      status: "error",
      message: "شماره موبایل الزمامی است.",
    };
  }

  const pattern = /^(\+98|0)?9\d{9}$/;

  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست",
    };
  }

}
export { login };
