import { profileActions } from "./index";
import { getAllProfileService } from "./services";

export const getAllProfileAction = () => async (dispatch) => {
    dispatch(profileActions.setIsFetching(true));
    try {
        const res = await getAllProfileService();
        if(res?.status===200){
            dispatch(profileActions.setIsFetching(false));
            dispatch(profileActions.setProfiles(res?.data));
        }
        dispatch(profileActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};