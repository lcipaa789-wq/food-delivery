import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusHandler = async (event, orderId) => {
    // console.log(event, orderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-full p-8">
      <h3 className="mb-6 text-2xl font-semibold">Order Page</h3>

      <div className="flex flex-col gap-5">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-[60px_2fr_1fr_1fr_160px] items-center gap-5 rounded-lg border border-gray-300 p-5 text-sm text-gray-700"
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />

            <div>
              <p className="mb-2 font-medium">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", ",
                )}
              </p>

              <p className="font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>

              <p>
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}, {order.address.country},{" "}
                {order.address.zipcode}
              </p>

              <p>{order.address.phone}</p>
            </div>

            <p>Items: {order.items.length}</p>

            <p className="font-semibold">${order.amount}</p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="rounded-md border border-gray-300 px-3 py-2 outline-none"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
