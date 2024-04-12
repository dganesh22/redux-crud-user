import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { createUsers, retriveSingleUser, retriveUsers, updateUser, deleteUser } from '../Actions/UserAction';

// initial state

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: "user",
    initialState : initialState.users,
    extraReducers: (builder) => {
        builder.addCase(createUsers.fulfilled, (state,action) => {
             state.push(action.payload.user)
        })
               .addCase(retriveSingleUser.fulfilled, (state,action) => {})
               .addCase(retriveUsers.fulfilled, (state,action) => {
                    // console.log(`reducer = `, action.payload)
                    return [...action.payload]
               })
               .addCase(updateUser.fulfilled, (state,action) => {
                 let userIndex = state.findIndex(item => item._id === action.payload.id)
                 state[userIndex] = {
                    ...state[userIndex],
                    ...action.payload
                 }
               })
               .addCase(deleteUser.fulfilled, (state,action) => {
                    let userIndex = state.findIndex(item => item._id === action.payload.id)
                    state.splice(userIndex,1)
               })
    }
})

// combine reducer 
const userReducer = combineReducers({
    users : userSlice.reducer, // state 
    singleUser: retriveSingleUser
})

export default userReducer