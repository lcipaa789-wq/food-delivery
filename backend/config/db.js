import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lcipaa789_db_user:674166@cluster0.bteb4eh.mongodb.net/food-del",
    )
    .then(() => console.log("DB Connected"));
};
