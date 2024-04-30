import React from "react";
import { useNavigate } from "react-router-dom";

const CheckUser = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-36 bg-starbucksBeige">
      <img className="flex justify-center" src="/img/logo.png" alt="landing" />
      <div className="flex gap-16">
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-52 h-24 rounded-2xl"
          onClick={() => navigate("/login")}
        >
          로그인
        </button>
        <button
          className="text-[32px] font-semibold text-starbucksGreen bg-white w-52 h-24 rounded-2xl"
          onClick={() => navigate("/choosePlace")}
        >
          비회원
        </button>
      </div>
    </section>
  );
};

export default CheckUser;
