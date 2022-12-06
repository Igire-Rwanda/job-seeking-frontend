import axios from "axios";
export const getAllJobService = async () => {

    try{
        const res =await axios.get("http://localhost:4041/job");
        return res;
    }catch (err) {
        console.log ("error from services.....: ", err);
    };
}