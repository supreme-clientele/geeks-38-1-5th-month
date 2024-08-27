import { createSlice } from '@reduxjs/toolkit'

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: {
        mainTitle: 'GeekTech'
    },
    reducers: {
        mainInfo: (state, action) => {
            state.mainTitle = 'Geeks'
        },
        withParams: (state, action) => {
            state.mainTitle = action.payload
        }
    }
})

export const { mainInfo, withParams } = mainPageSlice.actions;

export default mainPageSlice.reducer;