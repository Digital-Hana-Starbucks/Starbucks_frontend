import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/apiClient";
import { getCookie, removeCookie } from "../utils/cookie";

const OrderCompletion = () => {
  const navigate = useNavigate();
  const [isToken, setIsToken] = useState(null);
  const [point, setPoint] = useState<number>(0);

  const getPoint = async () => {
    try {
      const response = await ApiClient.getInstance().getPoint();
      console.log(response.point);
      setPoint(response.point);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getCookie("token")) {
      setIsToken(getCookie("token"));
      getPoint();
    }

    const timeout = setTimeout(() => {
      navigate("/");
      removeCookie("token");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      <img className="flex justify-center" src="/img/logo.png" alt="logo" />
      <div>
        <p className="text-[32px] font-semibold">결제가 완료 되었습니다.</p>
        <p className="text-[32px] font-semibold">감사합니다.</p>
      </div>
      {isToken && (
        <div className="flex">
          <p className="text-starbucksGreen font-semibold">보유 포인트는</p>
          <p className="text-starbucksGreen font-semibold px-1">{point}</p>
          <p>입니다.</p>
        </div>
      )}
    </section>
  );
};

export default OrderCompletion;
