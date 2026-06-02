import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } },
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-8">My Orders</h2>

      <div className="flex flex-col gap-5">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-5 text-sm border border-[#d1d1d1] p-5 text-[#454545] rounded-lg"
            >
              <img className="w-12" src={assets.parcel_icon} alt="" />

              <p className="leading-6">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>

              <p className="font-medium">${order.amount}.00</p>

              <p>
                Items:{" "}
                {order.items.reduce((total, item) => total + item.quantity, 0)}
              </p>

              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[tomato]"></span>

                <b>{order.status}</b>
              </p>

              <button
                onClick={fetchOrders}
                className="border border-[tomato] text-[tomato] bg-[#fff0ed] px-4 py-2 rounded-md hover:bg-[tomato] hover:text-white transition-all duration-300"
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
