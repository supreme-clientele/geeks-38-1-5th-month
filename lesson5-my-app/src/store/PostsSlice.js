import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch}) {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch(postsInfo(posts))
    }
)


const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        posts: []
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        },
        deletePosts: (state, action) => {
            state.posts = []
        }
    }
})

export const { postsInfo, deletePosts  } = postsSlice.actions;

export default postsSlice.reducer;