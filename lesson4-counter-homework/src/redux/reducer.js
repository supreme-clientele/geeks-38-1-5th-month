const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const increment = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const decrement = (value) => ({
    type: DECREMENT,
    payload: value,
});

export const reset = () => ({
    type: RESET,
});

const initialState = {
    counter: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + action.payload };
        case DECREMENT:
            return { ...state, counter: Math.max(0, state.counter - action.payload) }; // Минимальное значение 0
        case RESET:
            return { ...state, counter: 0 };
        default:
            return state;
    }
}
