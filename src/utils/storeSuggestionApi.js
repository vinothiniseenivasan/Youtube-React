import { createSlice } from "@reduxjs/toolkit";

const storeSuggestionApi =
createSlice({
        name : "search" ,
   
   initialState:{
      
  }  ,

   reducers: {
    getInformationFromApi :(state ,action) =>{
        state = Object.assign(state ,action.payload)
       }

   }
   

    });


    export default storeSuggestionApi.reducer;
    export const {getInformationFromApi} =storeSuggestionApi.actions;


