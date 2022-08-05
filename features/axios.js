import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default axios.create({
  baseURL: `${process.env.API_URL}`,
});
