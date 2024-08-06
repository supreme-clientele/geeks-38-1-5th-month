import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../redux/reducer';
import classes from './CounterPage.module.css';

const CounterPage = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className={classes.counterContainer}>
            <h1>Counter: {counter}</h1>
            <div className={classes.buttonContainer}>
                <button onClick={() => dispatch(increment(1))}>+1</button>
                <button onClick={() => dispatch(decrement(1))}>-1</button>
                <button onClick={() => dispatch(increment(10))}>+10</button>
                <button onClick={() => dispatch(decrement(10))}>-10</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default CounterPage;
