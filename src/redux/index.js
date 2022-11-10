import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import jobPost from "./jobPost";
import profile from "./profile";
import categories from "./categories";
import skills from "./skills";
import application from "./application"
const store = configureStore({
  reducer: {
    auth: auth,
    jobPost: jobPost,
    profile:profile,
    categories:categories,
    skills:skills,
    application :application,
  },
});

export default store;