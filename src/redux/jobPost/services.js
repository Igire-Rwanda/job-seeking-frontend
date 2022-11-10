import axios from "axios";

export const getAllJobPostService = async () => {
  try {
      const res = await axios.get("http://localhost:4044/jobPost");
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};