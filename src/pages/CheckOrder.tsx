import React, { useState } from "react";
import BasketTable from "../components/organisms/BasketTable";
import { useNavigate } from "react-router-dom";
import AlertModal from "../components/molecules/AlertModal";

const CheckOrder = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      navigate("/order");
      return;
    }
    setOpenModal(true);
    setErrorMessage("결제 방식을 선택해주세요.");
  };

  return (
    <section className="relative h-screen flex flex-col gap-4">
      {openModal && (
        <AlertModal
          message={errorMessage}
          modalToggle={() => setOpenModal(!openModal)}
        />
      )}
      <div className="flex justify-center items-center h-24 bg-starbucksGreen">
        <p className="text-xl text-white">
          주문 확인 및 결제 방식을 선택해주세요.
        </p>
      </div>
      <div className="flex flex-col gap-2 mx-2">
        <p className="text-left font-semibold">주문 확인</p>
        <BasketTable />
      </div>
      <div className="flex flex-col gap-2 mx-2 mt-2">
        <p className="text-left font-semibold">결제 방식</p>
        <button
          className={`flex justify-center items-center w-36 h-40 rounded-2xl font-semibold ${
            clicked ? "bg-starbucksGreen text-white" : "bg-starbucksBeige"
          }`}
          onClick={() => setClicked(!clicked)}
        >
          카드
        </button>
      </div>
      <div className="absolute bottom-0 flex justify-between w-full px-2 pb-2 gap-4">
        <button
          className="w-1/2 h-10 bg-danger rounded-lg text-white"
          onClick={() => navigate("/menu")}
        >
          뒤로가기
        </button>
        <button
          className="w-1/2 h-10 bg-starbucksGreen rounded-lg text-white"
          onClick={handleClick}
        >
          결제하기
        </button>
      </div>
    </section>
  );
};

export default CheckOrder;
