import React, { useRef, useState } from "react";
import { BasketMenuType } from "../../types/menu";
import { useSession } from "../../hooks/basketContext";
import { useQuery } from "react-query";
import { ApiClient } from "../../apis/apiClient";
import MenuCard from "./MenuCard";
import { useNavigate } from "react-router-dom";

const RecommendationModal = ({
  message,
  modalToggle,
  modalToggle2,
  setMenuFunc,
  openModal2,
  count,
  setCountFunc,
}: {
  message: string;
  modalToggle: () => void;
  modalToggle2: () => void;
  setMenuFunc: () => void;
  openModal2?: boolean;
  count: number;
  setCountFunc: () => void;
}) => {
  const navigate = useNavigate();

  const clickConfirm = () => {
    modalToggle2();
    navigate("/checkOrder");
  };

  const clickClose = () => {
    modalToggle2();
  };

  const { isLoading, data } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () => {
      const res = ApiClient.getInstance().getRecommendationList();
      return res;
    },
  });

  return (
    <div className="fixed flex flex-col justify-center items-center w-[585px] h-full bg-black bg-opacity-50">
      <div className="relative w-[95%] h-[95%] rounded-xl  bg-starbucksBeige gap-6">
        <div className="absolute top-2 left-[535px] w-full justify-end">
          <img
            className="flex w-3 h-3 cursor-pointer"
            src="/img/closeWhite.png"
            onClick={() => clickClose()}
          />
        </div>
        <div className="flex flex-col justify-center bg-starbucksGreen text-white text-xl w-full h-24">
          {message}
        </div>
        <div className="flex justify-center w-full my-2 h-[72vh]">
          <MenuCard
            data={data}
            setMenuFunc={setMenuFunc}
            setOpenModalFunc={() => modalToggle()}
            setOpenModalFunc2={() => modalToggle2()}
            count={count}
            openModal2={openModal2}
            setCountFunc={setCountFunc}
          />
        </div>
        <div className="absolute bottom-0 mb-2 px-6 flex justify-center items-center gap-4 w-full">
          <div
            className="flex justify-center align-middle items-center rounded-lg text-white bg-danger w-2/3 h-10 cursor-pointer"
            onClick={() => clickConfirm()}
          >
            뒤로 가기
          </div>
          <div
            className="flex justify-center align-middle items-center rounded-lg text-white bg-starbucksGreen w-2/3 h-10 cursor-pointer"
            onClick={() => clickConfirm()}
          >
            선택 완료
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationModal;
