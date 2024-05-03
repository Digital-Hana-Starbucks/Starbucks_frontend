import React from "react";

const CustomModal = ({
  message,
  modalToggle,
}: {
  message: string;
  modalToggle: () => void;
}) => {
  return (
    <div className="fixed flex flex-col justify-center items-center w-[585px] h-full bg-black bg-opacity-50">
      <div className="flex flex-col justify-center items-center w-96 h-40 rounded-xl bg-starbucksBeige gap-6">
        <p>{message}</p>
        <button
          className="w-32 h-40 rounded-xl text-white bg-starbucksGreen"
          onClick={modalToggle}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
