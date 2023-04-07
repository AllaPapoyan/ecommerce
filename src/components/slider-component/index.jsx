import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../../assets/images/Maskgroup(1).png"

const SliderComponent=()=>{
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null,
        autoplay:true,
        // speed: 2000,
        autoplaySpeed: 2000,

    };
    return(
        <div className={"SliderComponent G-container G-hidden"}>
            <Slider {...settings}>
                <div>
                    <div className={" slider"} style={{backgroundImage:`url("${bg}")`}}>
                        <p>Big Sale <button className={"sliderBtn"}>Shop Now</button> <br/>of Favorite Brands</p>
                    </div>
                </div>
                <div>
                    <div className={" slider"} style={{backgroundImage:`url("${bg}")`}}>
                        <p>Big Sale <button className={"sliderBtn"}>Shop Now</button> <br/>of Favorite Brands</p>
                    </div>
                </div>
                <div>
                    <div className={" slider"} style={{backgroundImage:`url("${bg}")`}}>
                        <p>Big Sale <button className={"sliderBtn"}>Shop Now</button> <br/>of Favorite Brands</p>
                    </div>
                </div>
            </Slider>


        </div>
    )
}
export default SliderComponent