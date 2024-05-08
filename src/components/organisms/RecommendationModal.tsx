import React, { useRef, useState } from "react";
import { BasketMenuType } from "../../types/menu";
import { useSession } from "../../hooks/basketContext";
import { useQuery } from "react-query";
import { ApiClient } from "../../apis/apiClient";
import MenuCard from "./MenuCard";

const RecommendationModal = ({
  message,
  modalToggle,
  modalToggle2,
  setMenuFunc,
  setFromRecommend,
  count,
  setCountFunc,
}: {
  message: string;
  modalToggle: () => void;
  modalToggle2: () => void;
  setMenuFunc: () => void;
  setFromRecommend: () => void;
  count: number;
  setCountFunc: () => void;
}) => {
  const clickConfirm = () => {
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
      <div className="relative flex flex-col w-5/6 h-5/6 rounded-xl bg-white gap-6">
        <div className="absolute top-2 left-[465px] w-full justify-end">
          <img
            className="flex w-3 h-3 cursor-pointer"
            src="./../../public/img/closeWhite.png"
            onClick={() => modalToggle2()}
          />
        </div>
        <div className="flex flex-col justify-center bg-starbucksGreen text-white w-full h-24">
          {message}
        </div>
        <MenuCard
          data={data}
          setMenuFunc={setMenuFunc}
          setOpenModalFunc={() => modalToggle()}
          count={count}
          setCountFunc={setCountFunc}
        />
        <div className="flex justify-center items-center w-full">
          <div
            className="mt-12 flex justify-center align-middle items-center rounded-lg text-white bg-starbucksGreen w-2/3 h-10 cursor-pointer"
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
