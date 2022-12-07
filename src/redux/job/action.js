import { jobActions } from "./index";
import { getAllJobService } from "./services";

export const getAllJobAction = () => async (dispatch) => {
    dispatch(jobActions.setIsFetching(true));
    try {
        const res = await getAllJobService();
        if(res?.status===200){
            dispatch(jobActions.setIsFetching(false));
            dispatch(jobActions.setJobs(res?.data));
        }
        dispatch(jobActions.setIsFetching(false));
    } catch(error){
        console.log("error: " + error)
    }
};