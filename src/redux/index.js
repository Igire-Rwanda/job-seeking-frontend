import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import user from "./user";
import job from './job';
const store = configureStore({
    reducer: {
        auth:auth,
        user: user,
        job:job,
       profile: profile,
    },
});
export default store;
