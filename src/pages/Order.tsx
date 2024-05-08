import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/completion");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-9 bg-starbucksBeige">
      <img className="flex justify-center" src="/img/logo.png" alt="logo" />
      <div>
        <p className="text-[32px] font-semibold">카드를 삽입해주세요.</p>
      </div>
      <img src="/img/card.png" alt="card" />
    </section>
  );
};

export default Order;
