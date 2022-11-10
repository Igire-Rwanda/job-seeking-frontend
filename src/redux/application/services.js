import axios from "axios";

export const getAllApplicationService = async () => {
  try {
      const res = await axios.get("http://localhost:4044/application");
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};