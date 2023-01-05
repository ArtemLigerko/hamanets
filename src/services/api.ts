import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceTest = async () => {
  try {
    const res = await instance.get("/api/transactions");
    console.log(res.data);
  } catch (e) {
    console.warn(e);
    console.log(process.env.REACT_APP_SERVER_URL);
  }
};

export default instance;
