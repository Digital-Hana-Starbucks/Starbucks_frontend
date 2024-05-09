import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { LoginType } from "../types/user";
import AlertModal from "../components/molecules/AlertModal";
import { setCookie } from "../utils/cookie";

const Login = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginMutation = useMutation((user: LoginType) =>
    ApiClient.getInstance().login(user),
  );

  const login = async () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;

    if (!id || !password) {
      setOpenModal(true);
      setErrorMessage("아이디 및 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await loginMutation.mutateAsync({
        userId: id,
        userPw: password,
      });
      console.log("로그인 성공!");
      setCookie("token", response.token);
      setCookie("user", response.user.userId);
      if (response.user.userRole === "USER") {
        navigate("/choosePlace");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      setErrorMessage("잘못되거나 없는 회원 정보입니다.");
      setOpenModal(true);
      console.error("로그인 실패:", error);
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      {openModal && (
        <AlertModal
          message={errorMessage}
          modalToggle={() => setOpenModal(!openModal)}
        />
      )}
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
