import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.succes) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.succes) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  return (
    <div className="mt-[50px] ml-[max(5vw,25px)] w-[70%] text-[#6d6d6d]">
      <p className="mb-5 text-[22px] font-semibold text-[#333]">
        All Food List
      </p>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-5 items-center gap-4 rounded border border-[#cacaca] bg-[#f9f9f9] px-4 py-3 text-[15px] font-semibold text-[#333]">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-4 border border-[#cacaca] px-4 py-3 text-[14px] text-[#555]"
          >
            <img
              src={`${url}/images/${item.image}`}
              alt=""
              className="h-[55px] w-[55px] rounded object-cover"
            />

            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>

            <p
              onClick={() => removeFood(item._id)}
              className="cursor-pointer text-[18px] font-bold text-red-500 hover:text-red-700"
            >
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
