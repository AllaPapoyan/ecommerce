import "./style.scss"
import {useState} from "react";
const  UpPart=()=>{
    const [check,setCheck]=useState(false)
    const isCheck=()=>{
        setCheck(!check)
    }
    return(
        <div className={"G-container up-part"}>
            <div className={"G-flex  up-part-left "}>
                <span  className={"icon oClick-icon oClick"}/>
                <span  className={"icon group "}/>
            </div>

            <div className={"up-part-center"}>
                <p>Our social medias</p>
                <div className={"icon-bloc"}>
                    <span  className={"icon in"}/>
                </div>
                <div className={"icon-bloc"}>
                    <span  className={"icon tw"}/>
                </div>
                <div className={"icon-bloc"}>
                    <span  className={"icon fb"}/>
                </div>
            </div>

            <div className={"up-part-right"}>
                <div className={"search-inp-part"}>
                    <p style={{marginRight:"10px"}}>Follow us</p>
                    <input className={"inp"}/>
                    <button className={"follow-part"}>Follow</button>
                </div>
                <div className={"checkbox-part"}>
                    <div className={"checkbox"} onClick={()=>isCheck()}>
                        <span  className={"icon check"} style={{ display: check ?"block":"none"}}/>
                    </div>
                    <p className={"text"}>
                        I agree to the processing of my personal data in order to receive promotional
                        and informational mailings in accordance with the terms of processing. Familiar with the explanation
                        of the rights associated with
                        the processing, the mechanism for their implementation, the consequences of giving consent or refusal.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default UpPart