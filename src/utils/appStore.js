import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";
import commentSliceReducer from "./commentSlice"
import userInputSliceReducer from "./userInputSlice"
import storeSuggestionApiReducer   from "./storeSuggestionApi"
import liveSliceReducer   from "./liveSlice";
import chatSliceReducer   from "./chatSlice";


const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
        comments:commentSliceReducer ,
        userInput:userInputSliceReducer,
        search: storeSuggestionApiReducer,
        live:liveSliceReducer,
        chat:chatSliceReducer
       }
     }
);


export default appStore;