import "./style.scss"
import usa from "../../assets/images/usa.png"
import usuHeader from "./usuHeader";
import {useState} from "react";
import {NavLink} from "react-router-dom";
const Header=()=>{
  const {isClick,handelClick}=usuHeader()

    return(
        <div className={"header-container"}>
            <div className={"sitemap-container G-container G-flex G-justify-between"}>
                <div className={"location "}>
                    <div className={"flag"} style={{backgroundImage:`url(${usa})`}}></div>
                    <p>USD</p>
                    <span className={"map-icon icon map-pint"}></span>
                    <p>USA</p>
                </div>
                <ul className={"information"}>
                    <li>Costumer Service</li>
                    <li>Delivery</li>
                    <li>Payment</li>
                    <li>Services</li>
                    <li>Sell</li>
                    <li>Order history</li>

                </ul>
                <div className={"login-component"}>
                    <span className={"icon phone h-icons"} />
                    <p> 032 122 233</p>
                    <span className={"icon user-icon h-icons"}/>
                    <p>Log In</p>
                </div>
            </div>
            <div className={"G-container catalog-container"}>
                    <button className={"btn-catalog"}
                            style={{backgroundColor : isClick ?"black" :"#9306FF"}}
                            onClick={()=>handelClick()}>
                        <span className={"icon lines "}/> Catalog
                    </button>
                  <NavLink to={"/"}>  <div className={"G-flex G-align-center"}>
                        <span  className={"icon oClick-icon"}/>
                        <span  className={"icon group"}/>
                    </div></NavLink>
                <div className={"search-part"}>
                    <input className={"search-inp"}/>
                    <button className={"search-btn"}><span  className={"icon search search-icon"}/></button>
                </div>

                    <div className={"add-part"}>
                        <span className={"icon like"}/>
                        <p>Cart</p>
                    </div>

                <NavLink to={'/like-product'} style={{textDecoration:"none",color:'black'}}>
                    <div className={"add-part"}>
                        <span className={"icon shop"}/>
                        <p>Cart</p>
                    </div>
                </NavLink>

                    <div className={"add-part"}>
                        <span className={"icon help"}/>
                        <p>Cart</p>
                    </div>


            </div>
            <div className={ `G-container   `}>
                <ul className={!isClick ? "products": "products-menu"}>
                <li>Discounts</li>
                <li>Smartphones and gadgets</li>
                <li>TVs and videos</li>
                <li>Laptops and computers</li>
                <li>Kitchen Appliances</li>
                <li>Home Appliances</li>
                <li>Beauty and Health</li>
                <li>Sport</li>
                <li>Game Zone</li>
                    <li>Popular categories</li>
                </ul>
            </div>
       </div>
    )
}
export default Header