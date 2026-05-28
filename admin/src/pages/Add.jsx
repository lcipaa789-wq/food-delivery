import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.succes) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="mt-12.5 ml-[max(5vw,25px)] w-[70%] text-[16px] text-[#6d6d6d]">
      <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
        {/* upload image */}
        <div className="flex flex-col gap-2.5">
          <p>Upload Image</p>

          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-30 cursor-pointer"
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>

        {/* product name */}
        <div className="flex flex-col gap-2.5">
          <p>Product Name</p>

          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="max-w-125 rounded border border-[#a9a9a9] p-2.5 outline-[tomato]"
          />
        </div>

        {/* product description */}
        <div className="flex flex-col gap-2.5">
          <p>Product Description</p>

          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            className="max-w-125 rounded border border-[#a9a9a9] p-2.5 outline-[tomato]"
          ></textarea>
        </div>

        {/* category + price */}
        <div className="flex gap-7.5">
          {/* category */}
          <div className="flex flex-col gap-2.5">
            <p>Product Category</p>

            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              className="w-40 cursor-pointer rounded-lg border border-[#cfcfcf] bg-white p-2.5 shadow-sm transition-all duration-200 outline-none hover:border-[tomato] focus:border-[tomato] focus:ring-2 focus:ring-[rgba(255,99,71,0.2)]"
            >
              <option value="Salad">🥗 Salad</option>
              <option value="Rolls">🍣 Rolls</option>
              <option value="Desserts">🍰 Desserts</option>
              <option value="Sandwich">🥪 Sandwich</option>
              <option value="Cake">🎂 Cake</option>
              <option value="Pure Veg">🥬 Pure Veg</option>
              <option value="Pasta">🍝 Pasta</option>
              <option value="Noodles">🍜 Noodles</option>
            </select>
          </div>

          {/* price */}
          <div className="flex flex-col gap-2.5">
            <p>Product Price</p>

            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              className="max-w-30 rounded border border-[#a9a9a9] p-2.5 outline-[tomato]"
            />
          </div>
        </div>

        {/* button */}
        <button
          type="submit"
          className="w-30 cursor-pointer rounded bg-black py-3 text-white transition-all hover:bg-gray-800"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
