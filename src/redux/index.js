import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import job from "./job";
 
const store = configureStore({
    reducer: {
        user:user,
        job:job,
    },
});
export default store;
