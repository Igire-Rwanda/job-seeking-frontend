import { skillActions } from "./index";
import { getAllSkillService } from "./services";

export const getAllSkillAction = () => async (dispatch) => {
    dispatch(skillActions.setIsFetching(true));
    try {
        const res = await getAllSkillService();
        if(res?.status===200){
            dispatch(skillActions.setIsFetching(false));
            dispatch(skillActions.setSkills(res?.data));
        }
        dispatch(skillActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};