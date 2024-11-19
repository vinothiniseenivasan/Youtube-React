import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";
import commentSliceReducer from "./commentSlice"
import userInputSliceReducer from "./userInputSlice"

const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
        comments:commentSliceReducer ,
        userInput:userInputSliceReducer
    }
     }
);


export default appStore;