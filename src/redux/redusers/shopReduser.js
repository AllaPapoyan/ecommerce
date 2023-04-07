import laptops from '../../assets/images/Maskgroup(8).png';
import smartphones from '../../assets/images/Maskgroup(11).png';
import headphones from "../../assets/images/Maskgroup(9).png";
import  watches from "../../assets/images/Maskgroup(6).png";
import tv from "../../assets/images/Maskgroup(7).png";
import  freezer from "../../assets/images/Double-Door-Refrigerator-PNG-Clipart-Background 1.png";
import fitness from "../../assets/images/Maskgroup(10).png"
import prod1 from "../../assets/images/iphone-12-purple-select-2021-removebg-preview 1.png"
import prod2 from "../../assets/images/microwave-lowres-3-removebg-preview 1.png"
import prod3 from "../../assets/images/1577013835-removebg-preview 1.png"
import prod4 from "../../assets/images/iphone-13-pink-select-2021 1.png"
import prod5 from "../../assets/images/Double-Door-Refrigerator-PNG-Clipart-Background 1.png"




import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[
        {
            id:1,
            name:"Laptops",
            img:laptops,
        },
        {
            id:2,
            name:"Smartphones",
            img: smartphones
        },
        {
            id:3,
            name:"Headphones",
            img:headphones,

        },
        {
            id:4,
            name: "Apple watches",
            img: watches
        },
        {
            id:5,
            name: "TV",
            img: tv
        },
        {
            id:6,
            name: "Freezer",
            img :freezer,
        },
        {
            id: 7,
            name: "Fitness tracker",
            img:fitness ,
        }
    ],
    products:[
        {
            id:1,
            sale:"Discount 5 months",
            categories:"electronic",
            img:prod1,
            name:"iPhone 12 64GB Purple (MHDC3FS/A)",
            code:"Code: 33575",
            star:"icon star",
            prise:"510.00 $"
        },
        {
            id:2,
            sale:"Discount 5 months",
            categories:"electronic",
            img:prod2,
            name:"Microwave oven Hyundai HYM-M2038 (white)",
            code:"Code: 33575",
            star:"icon star",
            prise:"510.00 $"
        },
        {
            id:3,
            sale:"Discount 5 months",
            categories:"electronic",
            img:prod3,
            name:"Washing machine LG F2J3HS4L",
            code:"Code: 33575",
            star:"icon star",
            prise:"510.00 $"
        },
        {
            id:4,
            sale:"Discount 5 months",
            categories:"electronic",
            img:prod4,
            name:"iPhone 13 128GB Pink (MNGG3J/A)",
            code:"Code: 33575",
            star:"icon star",
            prise:"510.00 $"
        },
        {
            id:5,
            sale:"Discount 5 months",
            categories:"electronic",
            img:prod5,
            name:"Refrigerator Beko B5RCNK403ZXBR KZ EN",
            code:"Code: 33575",
            star:"icon star",
            prise:"510.00 $"
        },
    ],

    singleProduct:[

    ],
    addCard:[

    ]
}

const shopsSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
        addItem: (state, action) => {
           const index= state.products.filter((el)=>el.id==action.payload)
            state.addCard.push(...index)

        },

        prodFilter:(state,action)=>{
            state.singleProduct=state.products.filter((el)=>el.id == action.payload)
        }
    }
})
export const {addItem,prodFilter }=shopsSlice.actions
export  default shopsSlice.reducer