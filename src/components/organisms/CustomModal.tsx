import React, { useRef, useState } from "react";
import { BasketMenuType } from "../../types/menu";
import { useSession } from "../../hooks/basketContext";

const CustomModal = ({
  message,
  modalToggle,
  modalToggle2,
  menu,
  openModal2,
  setCountFunc,
}: {
  message: string;
  modalToggle: () => void;
  modalToggle2?: () => void;
  menu: BasketMenuType;
  openModal2?: boolean;
  setCountFunc: () => void;
}) => {
  const [temper, setTemper] = useState("HOT");
  const [size, setSize] = useState("Tall");

  const { addBasket } = useSession();

  const clickTemp = (clickedTemp: string) => {
    setTemper(clickedTemp);
  };

  const clickSize = (clickedSize: string) => {
    setSize(clickedSize);
  };

  const clickClose = () => {
    modalToggle();
    if (openModal2) {
      modalToggle2!();
    }
  };

  const clickConfirm = () => {
    if (size == "Grande") {
      menu.menuPrice += 500;
    } else if (size == "Venti") {
      menu.menuPrice += 1000;
    }

    addBasket({
      basketIdx: menu.basketIdx,
      menuIdx: menu.menuIdx,
      menuName: menu.menuName,
      menuPrice: menu.menuPrice,
      menuImage: menu.menuImage,
      orderDetailCount: 1,
      menuTemperature: temper,
      menuSize: size,
    });
    setCountFunc();
    modalToggle();
    if (openModal2) {
      modalToggle2!();
    }
  };

  return (
    <div className="fixed flex flex-col justify-center items-center w-[585px] h-full bg-black bg-opacity-50">
      <div className="relative flex flex-col w-[95%] h-[95%] rounded-xl bg-white gap-4">
        <div className="absolute top-2 left-[535px] w-full justify-end">
          <img
            className="flex w-3 h-3 cursor-pointer"
            src="./../../public/img/closeWhite.png"
            onClick={() => clickClose()}
          />
        </div>
        <div className="flex flex-col justify-center bg-starbucksGreen text-white text-xl w-full h-24">
          {message}
        </div>

        {/* 온도영역 */}
        <div className="flex flex-col px-6">
          <p className="flex font-bold items-center">온도</p>
          <div className="mt-3 flex gap-6">
            <div
              className={
                temper == "HOT"
                  ? "flex rounded-lg justify-center items-center cursor-pointer bg-red-700 text-white w-32 h-32"
                  : "flex rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32"
              }
              onClick={() => clickTemp("HOT")}
            >
              HOT
            </div>
            <div
              className={
                temper == "ICE"
                  ? "flex rounded-lg justify-center items-center cursor-pointer bg-blue-700 text-white w-32 h-32"
                  : "flex rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32"
              }
              onClick={() => clickTemp("ICE")}
            >
              ICE
            </div>
          </div>
        </div>

        {/* 사이즈영역 */}
        <div className="flex flex-col px-6 mt-4">
          <p className="flex font-bold items-center">컵 선택</p>
          <div className="mt-3 flex gap-6">
            <div
              className={
                size == "Tall"
                  ? "flex flex-col pt-3 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32 border-2 border-starbucksGreen"
                  : "flex flex-col pt-3 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32"
              }
              onClick={() => clickSize("Tall")}
            >
              <img
                className="flex w-12 h-12"
                src="./../../public/img/grande.png"
              />
              <p
                className={
                  size == "Tall" ? "flex font-bold" : "flex font-normal"
                }
              >
                톨
              </p>
              <p className="flex">355ml</p>
            </div>
            <div
              className={
                size == "Grande"
                  ? "flex flex-col pt-2 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32 border-2 border-starbucksGreen"
                  : "flex flex-col pt-2 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32"
              }
              onClick={() => clickSize("Grande")}
            >
              <img
                className="flex w-14 h-14"
                src="./../../public/img/grande.png"
              />
              <p
                className={
                  size == "Grande" ? "flex font-bold" : "flex font-normal"
                }
              >
                그란데
              </p>
              <p className="flex">473ml</p>
            </div>
            <div
              className={
                size == "Venti"
                  ? "flex flex-col pt-1 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32 border-2 border-starbucksGreen"
                  : "flex flex-col pt-1 rounded-lg justify-center items-center cursor-pointer bg-starbucksBeige w-32 h-32"
              }
              onClick={() => clickSize("Venti")}
            >
              <img
                className="flex w-16 h-16"
                src="./../../public/img/grande.png"
              />
              <p
                className={
                  size == "Venti" ? "flex font-bold" : "flex font-normal"
                }
              >
                벤티
              </p>
              <p className="flex">591ml</p>
            </div>
          </div>
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

export default CustomModal;
