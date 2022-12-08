import {createSlice} from "@reduxjs/toolkit"

const jobSlice = createSlice({
    name: "job",
    initialState: {jobs: [], selectedJob:{}, isFetching:false},
    reducers: {
        setJobs(state, action){
            state.jobs = action.payload?.data;

        },
        setSelectedJob(state,action){
            state.selectedJob = action.payload;
        },
        setIsFetching(state, action){
            state.isFetching = action.payload;
        },
    },
});

export const jobActions = jobSlice.actions;

export default jobSlice.reducer;