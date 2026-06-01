import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  const inputStyle =
    "mb-4 p-2.5 w-full border border-gray-500 rounded outline-[tomato]";
  return (
    <>
      <form
        onSubmit={placeOrder}
        className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20 mt-25"
      >
        <div className="w-full max-w-[500px]">
          <p className="text-10 font-semibold mb-12.5 ">Delivery Information</p>
          <div className="flex gap-2.5">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              className={inputStyle}
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              className={inputStyle}
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className={inputStyle}
            type="email"
            placeholder="Email"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            className={inputStyle}
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-2.5">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              className={inputStyle}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              className={inputStyle}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-2.5">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              className={inputStyle}
              type="text"
              placeholder="Zip code"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              className={inputStyle}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            className={inputStyle}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="w-full md:max-w-[max(30%,500px)]">
          <div className="flex-1 flex flex-col gap-5 ">
            <h2 className="text-10 font-semibold">Cart total</h2>
            <div>
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2.5" />
              <div className="flex justify-between text-gray-600">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2.5" />
              <div className="flex justify-between text-gray-600">
                <p>Total</p>
                <p>
                  $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className=" mt-7.5 border-none text-white bg-red-500 w-[max(15vw,200px)] py-3 rounded-2xl cursor-pointer"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
