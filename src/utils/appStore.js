import { configureStore } from "@reduxjs/toolkit";
import navBarSliceReucer from "./navBarSlice";

const appStore = configureStore(
    {
    reducer:{
        navBar :navBarSliceReucer ,
    }
     }
);


export default appStore;