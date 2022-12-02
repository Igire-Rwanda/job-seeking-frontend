import axios from "axios";

export const createJobService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4041/job",data);
      return res;
  } catch (err) {
    console.log("error from services ...: ", err);
  }
};