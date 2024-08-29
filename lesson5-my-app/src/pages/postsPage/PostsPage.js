import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, deletePosts} from "../../store/PostsSlice";


const PostsPage = () => {

    const posts = useSelector(state => state.postsReducer.posts);

    const dispatch = useDispatch();

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    const deleteAllFunc = () => {
        dispatch(deletePosts())
    }

    console.log(posts)

    return (
        <div>
            <button onClick={getPostsFunc}>get posts</button>
            <button onClick={deleteAllFunc}>delete all</button>
        </div>
    );
};

export default PostsPage;