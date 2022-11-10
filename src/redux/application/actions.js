import { applicationActions } from "./index";
import { getAllApplicationService } from "./services";

export const getAllApplicationAction = () => async (dispatch) => {
    dispatch(applicationActions.setIsFetching(true));
    try {
        const res = await getAllApplicationService();
        if(res?.status===200){
            dispatch(applicationActions.setIsFetching(false));
            dispatch(applicationActions.setApplications(res?.data));
        }
        dispatch(applicationActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};