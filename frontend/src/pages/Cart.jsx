import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="mt-25">
      <div className="overflow-x-auto">
        <div className="min-w-130">
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
            <p>Items</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-2.5 text-gray-800">
                    <img
                      className="w-12"
                      src={url + "/images/" + item.image}
                      alt=""
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cursor-pointer"
                    >
                      x
                    </p>
                  </div>
                  <hr className="h-px bg-gray-300 border-none" />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-8 md:gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart total</h2>
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
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button
            className="border-none text-white bg-red-500 w-[max(15vw,200px)] py-3 rounded-2xl cursor-pointer"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-gray-500">
              If you hace a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded-2xl">
              <input
                className="bg-transparent border-none outline-none pl-2.5"
                type="text"
                placeholder="promo code"
              />
              <button className="w-[max(10vw,150px)] py-3 px-[5] bg-black border-none text-white rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
