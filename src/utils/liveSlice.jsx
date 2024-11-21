import { createSlice } from "@reduxjs/toolkit"
const liveSlice = createSlice({
    name:"live" ,
    initialState:{
        hasLive : "false"
    },
    reducers:{
        onLiveSlice:(state,action)=>{
            state.hasLive = true
        },
        offLiveSlice:(state,action)=>{
            state.hasLive = false
        }

    }
    


})

export default liveSlice.reducer;
export const {onLiveSlice , offLiveSlice } = liveSlice.actions;