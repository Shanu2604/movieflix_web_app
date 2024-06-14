import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const databaseConnection = () => {
  mongoose
    .connect("mongodb+srv://shantanu_26:movieapp@cluster0.p8qv3fo.mongodb.net/")
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default databaseConnection;
