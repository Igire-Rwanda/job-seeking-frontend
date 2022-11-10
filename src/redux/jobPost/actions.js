import { jobPostActions } from "./index";
import { getAllJobPostService } from "./services";

export const getAllJobPostAction = () => async (dispatch) => {
    dispatch(jobPostActions.setIsFetching(true));
    try {
        const res = await getAllJobPostService();
        if(res?.status===200){
            dispatch(jobPostActions.setIsFetching(false));
            dispatch(jobPostActions.setJobPosts(res?.data));
        }
        dispatch(jobPostActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};