import { userActions } from "./index";
import { CreateUserService,GetUserServices } from "./services";
// import {getUserAction} from "./services"

 export const CreateUserAction = (data) => async (dispatch) => {
    dispatch(userActions.setIsFetching(true));
    try {
        const res = await CreateUserService(data);
        if(res?.status===200){
            dispatch(userActions.setIsFetching(false));
            dispatch(userActions.setUsers(res?.data));
        }
        dispatch(userActions.setIsFetching(false));
    } catch (error) {      
        console.log("Error: " + error)
    }
};
export const GetUserAction = () => async (dispatch) => {
    dispatch(userActions.setIsFetching(true));
    try {
        const res = await  GetUserServices();
        if(res?.status===200){
            dispatch(userActions.setIsFetching(false));
            dispatch(userActions.setUsers(res));
        }
        dispatch(userActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};



