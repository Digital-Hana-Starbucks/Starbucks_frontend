import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { SignupType } from "../types/user";
import { ApiClient } from "../apis/apiClient";
import AlertModal from "../components/molecule/AlertModal";

const Signup = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const signupMutation = useMutation((user: SignupType) =>
    ApiClient.getInstance().signup(user),
  );

  const signup = async () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;
    const nickname = nicknameRef.current?.value;

    if (!id || !password || !nickname) {
      setOpenModal(true);
      setErrorMessage("모든 항목을 입력해주세요.");
      return;
    }

    try {
      await signupMutation.mutateAsync({
        userId: id,
        userPw: password,
        userNickname: nickname,
      });
      console.log("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      setOpenModal(true);
      setErrorMessage("존재하는 회원입니다.");
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
        <input
          ref={nicknameRef}
          type="text"
          name="password"
          className="w-[430px] h-[60px] rounded-2xl indent-5"
          placeholder="닉네임을 입력해주세요."
        />
      </div>
      <button
        className="text-[32px] font-semibold text-white bg-starbucksGreen w-52 h-24 rounded-2xl"
        onClick={signup}
      >
        회원가입
      </button>
    </section>
  );
};

export default Signup;
