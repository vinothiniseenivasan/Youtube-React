import { createSlice } from "@reduxjs/toolkit";

const userInputSlice = createSlice(
    {
        name: "userInput" ,
        initialState:{
            query: ""
        },
        reducers:{
            setSuggestions :(state,action)=>{
                state.query = action.payload
            } ,

            

        }

    }


);

export default userInputSlice.reducer;


export const { setSuggestions } = userInputSlice.actions;