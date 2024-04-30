import React, { useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { LoginType } from "../types/user";

const Login = () => {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginMutation = useMutation((user: LoginType) =>
    ApiClient.getInstance().login(user),
  );

  const login = async () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;

    if (!id || !password) {
      console.log("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      await loginMutation.mutateAsync({ userId: id, userPw: password });
      console.log("로그인 성공!");
      // 로그인 성공 시 이동할 경로를 지정합니다.
      navigate("/success");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      <img
        className="absolute top-4 right-4"
        src="/img/close.png"
        alt="close"
        onClick={() => navigate("/checkUser")}
      />
      <div>
        <img
          className="flex justify-center"
          src="/img/logo.png"
          alt="landing"
        />
        <p className="text-[32px] font-semibold">로그인</p>
      </div>
      <div className="flex flex-col gap-7">
        <input
          ref={idRef}
          type="text"
          name="id"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="아이디를 입력해주세요."
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-7">
        <button
          className="text-[32px] font-semibold text-white bg-starbucksGreen w-52 h-24 rounded-2xl"
          onClick={login}
        >
          로그인
        </button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </div>
    </section>
  );
};

export default Login;
