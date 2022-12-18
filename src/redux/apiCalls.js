import { postsFetchStart, postsFetchSuccess, postsFetchFailure } from "./postsSlice";
import axios from "axios"
export const fetchPosts = async (dispatch) => {
    dispatch(postsFetchStart());
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch(postsFetchSuccess(res.data));
    } catch (e) {
        dispatch(postsFetchFailure())
    }
}

