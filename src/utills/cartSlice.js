import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
       items: []
    },
    reducers:{
        addItem:(store,action)=>{
            let index = store.items.findIndex(obj => obj.id === action.payload.id);
            if (index !== -1) {
                    store.items[index].count++;
            }
            else{
                const tempitem=action.payload;
                tempitem.count=1;
                store.items.push(tempitem);

            }
        },
        removeItem:(store,action)=>{
            let index = store.items.findIndex(obj => obj.id === action.payload);
            if (index !== -1) {
                        store.items.splice(index, 1);
            }
        },
        reduceItem:(store,action)=>{
            let index = store.items.findIndex(obj => obj.id === action.payload);
            if (index !== -1) {
                    store.items[index].count--;
                    if (store.items[index].count < 1) {
                        store.items.splice(index, 1);
                    }
            }
        },
        clearCart:(store)=>{
            store.items=[];
        },
    }
});

export const {addItem,removeItem,clearCart,reduceItem}=cartSlice.actions;
export default cartSlice.reducer;