import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //query parameters in URL

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  //   console.log(success, orderId);
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="mim-h-[60vh] grid">
      <div className="w-25 h-25 place-self-center border-[5px] border-solid border-[#bdbdbd] border-t-[tomato] rounded-full animate-spin"></div>
    </div>
  );
};

export default Verify;
