import { createSlice } from "@reduxjs/toolkit";

const chatSlice =createSlice({
    name: "chat" ,
    initialState : {
        messages : [] ,

        cancelChat : false
    } ,

    reducers:{
        addLiveChatMessage : (state , action)=>{

            // remove 1 msg after every 10messages to avoid overloading on ui
            state.messages.slice(5 ,1);
            // unshift is used to push on 0th position
            state.messages.unshift(action.payload)
        },

        checkLiveChat: (state,action) =>{
            state.cancelChat=action.payload;
        }
    }
});

export default chatSlice.reducer;

export const {addLiveChatMessage , checkLiveChat} = chatSlice.actions;