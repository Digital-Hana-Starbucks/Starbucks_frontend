import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      <img
        className="absolute top-4 right-4"
        src="/public/img/close.png"
        alt="close"
        onClick={() => navigate("/checkUser")}
      />
      <div>
        <img
          className="flex justify-center"
          src="/public/img/logo.png"
          alt="landing"
        />
        <p className="text-[32px] font-semibold">회원가입</p>
      </div>
      <div className="flex flex-col gap-7">
        <input
          type="text"
          name="id"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="아이디를 입력해주세요."
        />
        <input
          type="password"
          name="password"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="비밀번호를 입력해주세요."
        />
        <input
          type="text"
          name="password"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="닉네임을 입력해주세요."
        />
      </div>
      <button className="text-[32px] font-semibold text-white bg-starbucksGreen w-52 h-24 rounded-2xl">
        회원가입
      </button>
    </section>
  );
};

export default Signup;
