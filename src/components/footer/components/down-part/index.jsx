import "./style.scss"
import visa from "../../../../assets/images/visa-credit-card.png"
import master from "../../../../assets/images/mastercard.png"
import paypal from "../../../../assets/images/paypal 1.png"
import pay from "../../../../assets/images/Apple Pay.png"
import gpay from "../../../../assets/images/google-pay 1.png"

const DownPart=()=>{
    return(
        <div className={"G-container G-flex G-justify-between down-part"}>
            <div className={"part-one"}>
                <p>Date of conclusion about the online store A-tech.by to the Trade Register of the Republic of
                    Jordan - 11.04.2018 Telephone numbers of the consumer protection commissioners
                    +37517-368-80-69 - administration of the Jordan
                    +37517-218-00-82 - the main department of trade and services of the.</p>
                <p>Conditions of Use, Privacy Notice, Interest-Based Ads
                    © 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
            <div className={"part-two"}>
               <p>Payment methods</p>
                <div className={"payments"}>
                    <div className={"payment-img"} style={{backgroundImage:`url(${visa})`}}></div>
                    <div className={"payment-img"} style={{backgroundImage:`url(${master})`}}></div>
                    <div className={"payment-img"} style={{backgroundImage:`url(${paypal})`}}></div>
                    <div className={"payment-img"} style={{backgroundImage:`url(${pay})`}}></div>
                    <div className={"payment-img"} style={{backgroundImage:`url(${gpay})`}}></div>
                </div>
                <p>© 2021 Company  LLP. All Rights Reserved.   Privacy Policy
                    Legal Notice</p>
            </div>
        </div>
    )
}
export default DownPart