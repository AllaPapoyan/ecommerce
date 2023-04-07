import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./redusers/shopReduser";
const store= configureStore({
    reducer:{
        shopReducer
    }
})
export default store