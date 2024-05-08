import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderCompletion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      <img className="flex justify-center" src="/img/logo.png" alt="logo" />
      <div>
        <p className="text-[32px] font-semibold">결제가 완료 되었습니다.</p>
        <p className="text-[32px] font-semibold">감사합니다.</p>
      </div>
      <div className="flex">
        <p className="text-starbucksGreen font-semibold pr-1">100</p>
        <p className="text-starbucksGreen font-semibold">포인트</p>
        <p>가 적립되었습니다.</p>
      </div>
    </section>
  );
};

export default OrderCompletion;
