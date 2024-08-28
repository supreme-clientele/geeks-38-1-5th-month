import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    isRegistered: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.username = action.payload.username;
            state.isRegistered = true;
        },
    },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
