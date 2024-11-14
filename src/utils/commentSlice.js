import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice(
    {
        name: "comments" ,
        initialState:{
          count:"0" ,
          intialComment  : [] ,
          addedUserComment:false
        },

        reducers:{
            addComment:(state ,action) =>{
                state.count =action.payload;
            } ,

            getCommentFromUser:(state ,action) =>{
                // state.intialComment =action.payload;
                state.intialComment = [action.payload, ...state.intialComment];
            },

            toggleUserComment:(state ,action) =>{
                // state.intialComment =action.payload;
                state.addedUserComment = true;
            },
            removePreviousVideoComment:(state,action) =>{
                state.intialComment =[]
            }
             

        }

    }


);

export default commentSlice.reducer;

export const {addComment ,getCommentFromUser,toggleUserComment,removePreviousVideoComment} = commentSlice.actions;

