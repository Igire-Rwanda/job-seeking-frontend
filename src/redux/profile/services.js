
import axios from "axios";

export const CreateProfileService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4041/profile",data);
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};
