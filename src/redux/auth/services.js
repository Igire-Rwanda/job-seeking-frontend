import axios from "axios";

export const loginService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4044/user",data);
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};