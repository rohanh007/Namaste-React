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
        addsearchres:(state ,actions)=>{
            state.items.push(actions.payload);
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload.itemId;
            console.log(state.items);
            state.items = state.items.filter(item => item.itemId !== itemIdToRemove);
        }
        
    }

})

export const  {addItem , removeitem}=Createslice.actions;
export default Createslice.reducer;
