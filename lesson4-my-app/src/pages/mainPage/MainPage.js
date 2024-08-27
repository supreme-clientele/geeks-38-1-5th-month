import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {mainInfo, withParams} from "../../store/mainPageSlice";

const MainPage = () => {

    const mainTitle = useSelector(state => state.mainReducer.mainTitle)
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const changeTitle = (title) => {
        dispatch(mainInfo())
    }

    const changeTitleWithParams = () => {
        dispatch(withParams(input))
    }

    console.log(input)

    return (
        <div>
            <h1>{mainTitle}</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={changeTitle}>change title</button>
            <button onClick={changeTitleWithParams}>change title with params</button>
        </div>
    );
};

export default MainPage;