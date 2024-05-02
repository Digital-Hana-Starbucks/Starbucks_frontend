import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section onClick={() => navigate("/menu")}>
      <div className="flex justify-center items-center bg-starbucksGreen h-[75vh]">
        <img src="./../../public/img/logo.png" alt="landing" />
      </div>
      <div className="flex justify-center items-center bg-starbucksBeige h-[15vh]">
        <p className="text-[32px] font-semibold text-starbucksGreen">
          주문하시려면 터치하세요.
        </p>
      </div>
    </section>
  );
};

export default Landing;
