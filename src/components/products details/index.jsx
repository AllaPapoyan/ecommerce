import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {prodFilter} from "../../redux/redusers/shopReduser";
import "./style.scss"
const ProductsDetails=()=>{
    const params=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(prodFilter(params.id))
    },[])

    const detal=useSelector((state)=>state.shopReducer.singleProduct)
    return(
        <div>
            {
                detal.map((el)=>{return(
                    <div key={el.id} className={"G-container aboutProduct "}>
                        <div className={"this-product"}>
                            <div className={"left-part"}>
                                <div className={"G-flex G-align-center"}>
                                    <span className={el.star} style={{backgroundColor:"#CBCBCB"}}/>
                                    <span className={el.star} style={{backgroundColor:"#CBCBCB"}}/>
                                    <span className={el.star} style={{backgroundColor:"#CBCBCB"}}/>
                                    <span className={el.star} style={{backgroundColor:"#CBCBCB"}}/>
                                    <span className={el.star} style={{backgroundColor:"#CBCBCB"}}/>
                                    <p style={{color:"#0AA9FF",marginLeft:"10px"}}>Reviews    0 questions</p>
                                </div>
                                <div className={"pic-part"}>
                                    <div className={"little-part"}>
                                        <img src={el.img}/>
                                        <img src={el.img}/>
                                    </div>
                                    <div className={"big-img"}>
                                        <img src={el.img}/>
                                    </div>

                                </div>

                            </div>
                            <div className={"right-part"}>
                               <p>Basic Information</p>
                                <p>Lörem ipsum homotassa banat, infranar: den klimatsäkra i epism.
                                    Brattig eunas och asm i närtad gigar. Desk minnespinne, viligt, diment askbränd.
                                    Miras parament kvasilig om sovis jag plarat. Homore neprevirat, inte höska tin i gåbovaledes. </p>
                            </div>
                        </div>


                        <div className={"product-code"}>
                            <p className={"code-num"}>{el.code}</p>
                            <p className={"product-name"}>{el.name}</p>
                            <p className={"retting"}><span className={el.star}></span>(4.4) 32 reviews</p>
                            <p className={"products-prise"}>{el.prise}</p>
                            <p className={"price"}>Price when purchased online</p>

                            <div className={"buy-like"}>
                                <button className={"cart-btn"}>ADD TO CART</button>
                                <div className={"like-btn"}>
                                    <span className={"icon like lll"}></span>
                                </div>
                            </div>
                            <p className={"text-aa"}>Free shipping, arrives by Mon, Dec 26 to Sacramento, 95829</p>
                            <p className={"text-aa"}>Pickup not available at Sacramento Supercenter <br/> Check availability nearby</p>
                            <p className={"text-aa"}><b>This item is gift eligible</b></p>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}
export default ProductsDetails