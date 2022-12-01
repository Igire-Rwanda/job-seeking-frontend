import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import user from "./user";
const store = configureStore({
    reducer: {
        auth:auth,
        user: user,
    },
});
export default store;
