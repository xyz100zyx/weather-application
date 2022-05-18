import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../model/Storage';

const initialState = {
    name: storage.getItem(`name`) || `Минск`,
};

export const currentCitySlice = createSlice({
    name: 'current_name',
    initialState,
    reducers: {
        setText(state, action){
            state.name = action.payload            
        }
    }

})

export default currentCitySlice.reducer;
export const {setText} = currentCitySlice.actions