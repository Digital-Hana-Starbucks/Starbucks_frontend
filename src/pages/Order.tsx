import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { useSession } from "../hooks/basketContext";
import { OrderType, createOrderType } from "../types/order";
import { useMutation } from "react-query";
import AlertModal from "../components/molecules/AlertModal";

const Order = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { basket } = useSession();

  const orderList: createOrderType[] = basket.basketList.map((item) => {
    let order: createOrderType = {
      menuIdx: item.menuIdx,
      orderDetailCount: item.orderDetailCount,
      menuTemperature: null,
      menuSize: null,
    };
    if (item.menuTemperature && item.menuSize) {
      order.menuTemperature = item.menuTemperature;
      order.menuSize = item.menuSize;
    }

    return order;
  });

  const orderMutation = useMutation((order: createOrderType[]) =>
    ApiClient.getInstance().createOrder(order),
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        orderMutation.mutateAsync(orderList);
        console.log("결제 완료");
        const timeout2 = setTimeout(() => {
          navigate("/completion");
        }, 3000);
        return () => clearTimeout(timeout2);
      } catch (error) {
        console.log(error);
        setOpenModal(true);
        setErrorMessage("결제를 실패 했습니다.");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      {openModal && (
        <AlertModal
          message={errorMessage}
          modalToggle={() => setOpenModal(!openModal)}
        />
      )}
      <img className="flex justify-center" src="/img/logo.png" alt="logo" />
      <div>
        <p className="text-[32px] font-semibold">카드를 삽입해주세요.</p>
      </div>
      <img src="/img/card.png" alt="card" />
    </section>
  );
};

export default Order;
