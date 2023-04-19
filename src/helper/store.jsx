import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import favoritesReducer from "./favoritesSlice"
const store =configureStore({
 reducer:{
     cart:cartSlice,
     favorites: favoritesReducer,

 }
})

export default store



/*
Create Store 
-configureStore() -RTK
Provide my store to app
<Provider store ={store}/> --react redux

Slice
createSlice() -RTK
        -name: ,
        -intitalState:[] ,
        reducers:{
            actionItem:(state,action)=>{
                state.action.payload
            }
        }

        export const {} =cartSlcie.action
        export default cartSlice.reducer
    
Put Slice in Store 

{
    reducer:{
        cart:cartSlice
    }

    const store =configureStore({
 reducer:{
     cart:cartSlice,

 }
})
}
*/