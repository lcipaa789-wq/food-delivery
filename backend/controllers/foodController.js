import foodModel from "../models/foodModel.js";

import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  console.log(req.body);
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({
      succes: true,
      message: "Food adeed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      succes: false,
      message: error.message,
    });
  }
};
export { addFood };
