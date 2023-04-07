import './style.scss'
const Information=()=>{
    return(
        <div className={"G-container center-part"}>
            <ul className={"categories-list"}>
                <li>Categories</li>
                <li>Discounts</li>
                <li>Smartphones and gadgets</li>
                <li>TVs and videos</li>
                <li>Laptops and computers</li>
                <li>Kitchen appliances</li>
                <li>Home appliances</li>
                <li>Beauty and Health</li>
            </ul>
            <ul className={"categories-list"}>
                <li>Support</li>
                <li>How to make an order</li>
                <li>Delivery</li>
                <li>Payment</li>
                <li>Exchange and returns</li>
                <li>Law information</li>
                <li>Processing of personal data</li>
            </ul>
            <ul className={"categories-list"}>
                <li>About us</li>
                <li>About company</li>
                <li>Contacts</li>
                <li>Jobs</li>
            </ul>
            <ul className={"categories-list"}>
                <li>Contacts</li>
                <li>Order history</li>
                <li>Contact us</li>
                <li className={"G-flex G-justify-between li-info"} style={{gap:"25px"}}>
                    <div className={"G-flex G-justify-between"} style={{gap:"5px"}}>
                         <div className={"i-cont"}><span className={'icon phone f-phone'}/></div>
                         <p>032 233 666</p>
                    </div>
                    <div className={"G-flex G-justify-between"} style={{gap:"5px"}}>
                        <div className={"i-cont"}><span className={'icon m f-phone'}/></div>
                        <p>name@gmail.com</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}
export default Information
