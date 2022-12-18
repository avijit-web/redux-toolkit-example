import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        postsList: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        postsFetchStart: (state) => {
            state.isFetching = true;
        },
        postsFetchSuccess: (state, action) => {
            state.isFetching = false;
            state.postsList = action.payload;
        },
        postsFetchFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { postsFetchStart, postsFetchSuccess, postsFetchFailure } = postSlice.actions;

export default postSlice.reducer;