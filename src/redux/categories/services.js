import axios from "axios";

export const getAllCategoryService = async () => {
  try {
      const res = await axios.get("http://localhost:4044/category");
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};