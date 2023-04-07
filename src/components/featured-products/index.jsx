import {useDispatch, useSelector} from "react-redux";
import "./style.scss"
import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {addItem, prodFilter, show} from "../../redux/redusers/shopReduser";

const FeaturedProducts=()=>{

    const products=useSelector((state)=> state.shopReducer.products)
    const dispatch=useDispatch()
    const [starColor,setStarColor]=useState(false)
    const changeColor=()=>{
       return  setStarColor(!starColor)
    }

    return(
        <div className={"G-container featured-products"}>
            <p className={"featured-products-title"}>Featured products</p>
            <div className={"featured-products-cont"}>
                {
                    products.map((el)=>{
                        return(

                            <div key={el.id} className={"products-cont"}>
                               <div className={"sale-part"}>
                                   <p className={"sale"}>{el.sale}</p>
                                   <span className={"icon down"}/>
                               </div>
                                <NavLink to={`/product/${el.id}`} style={{textDecoration:"none", color:"black"}}>
                                    <div className={"product-img-cont"} onClick={() =>dispatch(prodFilter())}>
                                        <img  alt="" src={el.img}/>
                                    </div>
                                </NavLink>
                                <div className={"code-part"}>
                                    <span onClick={changeColor}  className={el.star}
                                          style={{backgroundColor : starColor ? "#D9D9D9" : "yellow"}}/>
                                    <p>{el.code}</p>
                                </div>

                                <p className={"product-name"}>{el.name}</p>
                                <p className={"products-prise"}>{el.prise}</p>

                                <div className={"buy-like"}>
                                    <NavLink to={`/card/${el.id}`}>
                                        <button className={"cart-btn"} onClick={()=>dispatch(addItem(el.id))}   style={{textDecoration:"none", color:"black"}}>ADD TO CART</button>
                                    </NavLink>
                                    <div className={"like-btn"}>
                                        <span className={"icon like lll"}></span>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>

    )
}
export default FeaturedProducts