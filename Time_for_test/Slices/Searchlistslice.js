import { createSlice } from "@reduxjs/toolkit";

const Createslice=createSlice({
    name:"searchres",
    initialState:{
        items:[],
    },
    reducers:{
        addsearchres:(state ,actions)=>{
            state.items.push(actions.payload);
        }
    }

})

export const  {addsearchres}=Createslice.actions;
export default Createslice.reducer;
