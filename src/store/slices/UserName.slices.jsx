import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
    initialState: "",
    reducers: {
        user: (state, action) =>{
            return action.payload;
        }
    }
})

export const { user } = userSlice.actions;

export default userSlice.reducer;