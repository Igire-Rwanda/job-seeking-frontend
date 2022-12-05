
import {profileActions } from "./index";
import { CreateProfileService } from "./services";

export const CreateProfileAction = (data) => async (dispatch) => {
    dispatch(profileActions.setIsFetching(true));
    try {
        const res = await CreateProfileService(data);
        if(res?.status===200){
            dispatch(profileActions.setIsFetching(false));
            dispatch(profileActions.setProfiles(res?.data));
        }
        dispatch(profileActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};
