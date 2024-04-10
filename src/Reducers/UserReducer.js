import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { createUsers, retriveSingleUser, retriveUsers, updateUser, deleteUser } from '../Actions/UserAction';

// initial state

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createUsers.fulfilled, (state,action) => {})
               .addCase(retriveSingleUser.fulfilled, (state,action) => {})
               .addCase(retriveUsers.fulfilled, (state,action) => {})
               .addCase(updateUser.fulfilled, (state,action) => {})
               .addCase(deleteUser.fulfilled, (state,action) => {})
    }
})

// combine reducer 
const userReducer = combineReducers({
    userData: userSlice.reducer,
    singleUser: retriveSingleUser
})

export default userReducer