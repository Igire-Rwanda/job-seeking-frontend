import { categoryActions } from "./index";
import { getAllCategoryService } from "./services";

export const getAllCategoryAction = () => async (dispatch) => {
    dispatch(categoryActions.setIsFetching(true));
    try {
        const res = await getAllCategoryService();
        if(res?.status===200){
            dispatch(categoryActions.setIsFetching(false));
            dispatch(categoryActions.setCategorys(res?.data));
        }
        dispatch(categoryActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};