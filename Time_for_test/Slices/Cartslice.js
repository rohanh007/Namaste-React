import { createSlice } from "@reduxjs/toolkit";

const Createslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeitem:(state,action)=>{
              state.items.pop();
        }
    }

})

export const  {addItem , removeitem}=Createslice.actions;
export default Createslice.reducer;
