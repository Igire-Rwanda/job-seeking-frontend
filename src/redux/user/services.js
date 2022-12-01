import axios from "axios";

export const CreateUserService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4041/user",data);
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};