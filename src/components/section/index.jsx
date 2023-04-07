import "./style.scss";
import mmm1 from "../../assets/images/Maskgroup(12).png";
import mmm2 from "../../assets/images/Maskgroup(kr).png";
import mmm3 from "../../assets/images/nkar.png"
import mmm4 from "../../assets/images/Maskgroup(4).png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SampleNextArrow, SamplePrevArrow} from "./indesx";


const Section=()=>{


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow:<SamplePrevArrow />,
        autoplay:true,
        // speed: 2000,
        autoplaySpeed: 2000,

    };
    return(
        <div className={"four-img-container-fluid"}>
            <div className={"G-container  cont"}>
                <div className={"img-blog"}>
                    <img  alt="" src={mmm1}/>
                </div>
                <div className={"img-blog"}>
                    <img  alt="" src={mmm2}/>
                </div>
                <div className={"img-blog"}>
                    <img  alt="" src={mmm3}/>
                </div>
                <div className={"img-blog"}>
                    <img  alt="" src={mmm4}/>
                </div>
            </div>

           <div className={"slider-responsive G-hidden G-container"}>
               <Slider  {...settings}>
                   <div>
                       <div className={"img-blog-slid"}>
                           <img  alt="" src={mmm1}/>
                       </div>
                   </div>

                   <div>
                       <div className={"img-blog-slid"}>
                           <img  alt="" src={mmm2}/>
                       </div>
                   </div>

                   <div>
                       <div className={"img-blog-slid"}>
                           <img  alt="" src={mmm3}/>
                       </div>
                   </div>
                   <div>
                       <div className={"img-blog-slid"}>
                           <img  alt="" src={mmm4}/>
                       </div>
                   </div>
               </Slider>
           </div>

        </div>
    )
}
export default Section