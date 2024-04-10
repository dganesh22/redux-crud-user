import { configureStore } from "@reduxjs/toolkit"
import UserReducer from '../Reducers/UserReducer'

const AppStore = configureStore({
    reducer: UserReducer,
    devTools: true
})

 export default AppStore;