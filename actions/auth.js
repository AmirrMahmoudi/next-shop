"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies, headers } from "next/headers";

const login = async (stateLogin, formData) => {
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

  const data = await postFetch("/auth/login", { cellphone });

  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 Week
    });
    return {
      status: data.status,
      message: "کد ورود با موفقیت برای شما ارسال شد",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

const checkOtp = async (stateOtp, formData) => {
  const otp = formData.get("otp");

  if (otp === "") {
    return {
      status: "error",
      message: "کد ورود الزامی است.",
    };
  }

  const pattern = /^[0-9]{6}$/;

  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد ورود معتبر نیست.",
    };
  }

  const loginToken = cookies().get("login_token");

  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست. یکبار دیگر تلاش کنید",
    };
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookies().delete("login_token");
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 Week
    });
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید.",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
};

const me = async () => {
  const token = cookies().get("token");

  if (!token) {
    return {
      error: "Not Authorized",
    };
  }

  const data = await postFetch(
    "/auth/me",
    {},
    {
      Authorization: `Bearer ${token.value}`,
    }
  );

  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "User Forbidden",
    };
  }
};

export { login, checkOtp, me };
