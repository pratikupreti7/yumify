import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items=[]
        },
        clearItem:(state,action)=>{
            state.items.pop()
        },
        removeItem: (state, action) => {
          const index = state.items.findIndex((item) => item.id === action.payload.id);
          if (index >= 0) {
            state.items.splice(index, 1);
          }
        },
    }
})
export const{addItem,clearCart,removeItem,clearItem}=cartSlice.actions

export default cartSlice.reducer

