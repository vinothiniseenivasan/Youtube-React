import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";
import commentSliceReducer from "./commentSlice"
import userInputSliceReducer from "./userInputSlice"
import storeSuggestionApiReducer   from "./storeSuggestionApi"
import liveSliceReducer   from "./liveSlice"

const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
        comments:commentSliceReducer ,
        userInput:userInputSliceReducer,
        search: storeSuggestionApiReducer,
        live:liveSliceReducer
       }
     }
);


export default appStore;