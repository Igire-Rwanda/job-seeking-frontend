import axios from "axios";

export const getAllPurchaseService = async () => {
  try {
      const res = await axios.get("http://localhost:4044/skills");
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};