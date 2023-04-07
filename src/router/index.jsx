import {Route, Routes} from 'react-router-dom'
import HomePage from "../pages/home-page";
import LikeProducts from "../pages/like-products";
import AboutProduct from "../components/about-product";
import ProductsDetails from "../components/products details";
import CardPart from "../components/card-part";
const Router=()=>{
    return(
        <Routes>
            <Route  path="/" element={<HomePage />}/>
            <Route path="/like-product" element={<LikeProducts />}/>
            <Route path="/aboutProduct" element={<AboutProduct />}/>
            <Route path={"/product/:id"} element={<ProductsDetails />}/>
            <Route path={"/card/:id"} element={<CardPart/>}/>

        </Routes>
    )
}
export default Router