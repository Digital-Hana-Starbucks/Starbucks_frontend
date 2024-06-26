import React from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../hooks/basketContext";

const ChoosePlace = () => {
  const navigate = useNavigate();
  const { resetBasket } = useSession();

  const naviMenu = () => {
    resetBasket();
    navigate("/menu");
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] gap-6 bg-starbucksBeige">
      <img
        className="absolute top-4 right-4"
        src="/img/close.png"
        alt="close"
        onClick={() => navigate("/checkUser")}
      />
      <div className="flex flex-col items-center gap-4">
        <img
          className="flex justify-center"
          src="/img/logo.png"
          alt="landing"
        />
        <p className="text-4xl font-semibold">서비스를 선택해주세요.</p>
      </div>
      <div className="flex gap-6">
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-60 h-80 rounded-2xl"
          onClick={() => naviMenu()}
        >
          먹고가기
        </button>
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-60 h-80 rounded-2xl"
          onClick={() => naviMenu()}
        >
          포장하기
        </button>
      </div>
    </section>
  );
};

export default ChoosePlace;
