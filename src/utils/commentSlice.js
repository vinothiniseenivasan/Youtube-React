import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice(
    {
        name: "comments" ,
        initialState:{
          count:"0" ,
          intialComment  : []
        },
        reducers:{
            addComment:(state ,action) =>{
                state.count =action.payload;
            } ,

            getCommentFromUser:(state ,action) =>{
                state.intialComment =action.payload;
            }

        }

    }


);

export default commentSlice.reducer;

export const {addComment ,getCommentFromUser} = commentSlice.actions;

