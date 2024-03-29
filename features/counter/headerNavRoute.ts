import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface HeaderNavType {
//     routeName:"forYou"|"following",
// }
// const initialState:HeaderNavType = {
//     routeName:"forYou"
// }

export const headerNavRoute = createSlice({
    name:"headerRouteName",
    initialState:{routeName:"forYou"},
    reducers:{
        changeHeaderRouteName:(state,action:PayloadAction<"forYou"|"following">)=>{
            state.routeName = action.payload
        }
    }
})

export const {changeHeaderRouteName} = headerNavRoute.actions

export default headerNavRoute.reducer