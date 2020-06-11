import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseURL = "api";

const customAxios = axios.create({
  baseURL,
});

export default customAxios;
