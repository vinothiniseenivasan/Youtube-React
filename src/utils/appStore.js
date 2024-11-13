import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";
import commentSliceReducer from "./commentSlice"

const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
        comments:commentSliceReducer
    }
     }
);


export default appStore;