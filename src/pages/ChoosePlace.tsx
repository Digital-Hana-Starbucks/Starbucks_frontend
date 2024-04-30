import React from "react";
import { useNavigate } from "react-router-dom";

const ChoosePlace = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col justify-center items-center h-[90vh] gap-6 bg-starbucksBeige">
      <img
        className="absolute top-4 right-4"
        src="./../../public/img/close.png"
        alt="close"
        onClick={() => navigate("/checkUser")}
      />
      <div className="flex flex-col items-center gap-4">
        <img
          className="flex justify-center"
          src="./../../public/img/logo.png"
          alt="landing"
        />
        <p className="text-4xl font-semibold">서비스를 선택해주세요.</p>
      </div>
      <div className="flex gap-6">
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-60 h-80 rounded-2xl"
          onClick={() => navigate("/menu")}
        >
          먹고가기
        </button>
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-60 h-80 rounded-2xl"
          onClick={() => navigate("/menu")}
        >
          포장하기
        </button>
      </div>
    </section>
  );
};

export default ChoosePlace;
