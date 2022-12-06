import { jobActions } from "./index";
import { createJobService } from "./service";

export const jobAction = (data) => async (dispatch) => {
    dispatch(jobActions.setIsFetching(true));
    try {
        const res = await createJobService(data);
        if(res?.status===200){
            dispatch(jobActions.setIsFetching(false));
            dispatch(jobActions.login(res?.data));
        }
        dispatch(jobActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};