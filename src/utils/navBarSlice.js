import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice(
    {
        name: "navbar" ,
        initialState:{
            toggleBar: false,
        },
        reducers:{
            changeToggleBar :(state,action)=>{
                state.toggleBar = !state.toggleBar
            }

        }

    }


);

export default navBarSlice.reducer;

export const {changeToggleBar} = navBarSlice.actions;