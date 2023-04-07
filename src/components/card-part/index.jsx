import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {useState} from "react";
import {click} from "@testing-library/user-event/dist/click";

const CardPart=()=>{

    const params=useParams()
    const dispatch=useDispatch()





    const card= useSelector((state)=>state.shopReducer.addCard)
    const [count,setCount]=useState(1)

    const handleCountChange = (isIncrement) => {
        if (isIncrement ) {
            setCount(count + 1);
        }
        else {
            if (count > 1) { // Check if count is greater than 1
                setCount(count - 1);
            }
        }
    }
    return(
        <div className={"G-container  card-bloc"}>
            <p style={{paddingTop:"45px ", fontSize:"34px"}}>Shopping Cart</p>
                {
                    card.map((el)=>{
                        return(
                            <div key={el.id}  className={" card-component"}>
                                <div className={"card-left-part"}>
                                    <div className={"first-bloc"}>
                                        <div className={"img-bloc"}>
                                            <img src={el.img} alt={""}/>
                                        </div>
                                        <p className={"pink-text"}>Delivery address </p>
                                        <p className={"pink-text"}>Payment method </p>

                                        <div className={"formik"}>
                                            <p  className={"ppp"}>Recipient</p>
                                            <input className={"inp_bb"} placeholder={"Name"}/>
                                            <input className={"inp_bb"} placeholder={"Surname"}/>
                                            <input className={"inp_bb"} placeholder={"Phone"}/>

                                        </div>
                                    </div>
                                    <div>
                                        <div className={"second-child "}>
                                            <p>{el.name}</p>
                                            <p>Lörem ipsum homotassa banat, infranar: den
                                                klimatsäkra i epism.</p>

                                            <div className={"count  G-flex"}>
                                                <button onClick={()=>handleCountChange(false)}>&#45;</button>
                                                <p>{count}</p>
                                                <button onClick={()=>handleCountChange(true)}>&#43;</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"card-right-part"}>
                                    <p className={"code-num"}>{el.code}</p>
                                    <p className={"product-name"}>{el.name}</p>
                                    <p className={"retting"}><span className={el.star}></span>(4.4) 32 reviews</p>
                                    <p className={"products-prise"}>{el.prise}</p>
                                    <p className={"price"}>Price when purchased online</p>

                                    <div className={"buy-like"}>
                                        <button className={"cart-btn"}>CHACHOUT</button>
                                        <div className={"like-btn"}>
                                            <span className={"icon touche lll"}></span>
                                        </div>
                                    </div>
                                    <p className={"text-aa"}>Free shipping, arrives by Mon, Dec 26 to Sacramento, 95829</p>
                                    <p className={"text-aa"}>Pickup not available at Sacramento Supercenter <br/> Check availability nearby</p>
                                    <p className={"text-aa"}><b>This item is gift eligible</b></p>
                                </div>

                            </div>
                        )
                    })
                }

        </div>
    )
}
export default CardPart