import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice(
    {
        name: "navbar" ,
        initialState:{
            toggleBar: true,
        },
        reducers:{
            changeToggleBar :(state,action)=>{
                state.toggleBar = !state.toggleBar
            } ,

            closeNavBar :(state ,action)=>{
                state.toggleBar = false;
            }

        }

    }


);

export default navBarSlice.reducer;

export const {changeToggleBar,closeNavBar} = navBarSlice.actions;