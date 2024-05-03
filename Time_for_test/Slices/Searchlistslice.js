import { createSlice } from "@reduxjs/toolkit";

const Createslice=createSlice({
    name:"searchres",
    initialState:{
        items:[],
    },
    reducers:{
        addsearchres:(state ,actions)=>{
            state.items.push(actions.payload);
            console.log("hey   .... ")
        }
    }

})

export const { addsearchres } = Createslice.actions;
export const searchresReducer = Createslice.reducer;
