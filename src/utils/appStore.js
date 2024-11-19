import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";
import commentSliceReducer from "./commentSlice"
import userInputSliceReducer from "./userInputSlice"
import storeSuggestionApiReducer   from "./storeSuggestionApi"

const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
        comments:commentSliceReducer ,
        userInput:userInputSliceReducer,
        search: storeSuggestionApiReducer

    }
     }
);


export default appStore;