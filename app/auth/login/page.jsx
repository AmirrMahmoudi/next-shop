"use client";
import CheckOtpForm from "@/components/auth/CheckOtpForm";
import LoginForm from "@/components/auth/LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [cellphone, setCellphone] = useState("");
  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              {step == 1 && (
                <LoginForm setStep={setStep} setCellphone={setCellphone} />
              )}

              {step == 2 && <CheckOtpForm cellphone={cellphone} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
