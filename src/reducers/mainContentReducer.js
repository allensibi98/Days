import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();
const mainContentState = {
    date: new Date().getDate(),
    dateString: new Date().toLocaleString('default', { month: 'long', weekday: 'long'}) + ' ' + new Date().getFullYear()
}

const initialState = {
    reload: 1,
    mainContentState,
    combos: []
}

export const mainContentSlice = createSlice({
    name: 'mainContentSlice',
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.mainContentState = { 
                ...action.payload,
            };
        }
    }
})

export { initialState };
export const { setDate } = mainContentSlice.actions;
export default mainContentSlice.reducer;