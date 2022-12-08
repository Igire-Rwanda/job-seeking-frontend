import axios from "axios";

export const CreateUserService = async (data) => {
  try {
      const res = await axios.post("http://localhost:4041/user",data);
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const GetUserServices=async()=>{

  try{
    const res= await axios.get("http://localhost:4041/user");
    return res

  }catch(error){
    console.log("error from get service "+error)

  }
}