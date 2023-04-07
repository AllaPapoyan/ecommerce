import "./style.scss"
import {useSelector} from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularCategories=()=>{
    const items=useSelector((state)=>state.shopReducer.items)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
                },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
        ]

    };

    return(
        <div className={'G-container categories G-hidden '}>
            <p className={"categories-titles"}>Popular categories</p>
            <div className={"bloc"}>
                <Slider {...settings} >

                        {
                            items.map(el=>{
                                return(
                                    <div key={el.id}>
                                    <div  className={"category-border"}>
                                        <img alt="" src={el.img}/>
                                        <p>{el.name}</p>
                                    </div>
                                    </div>
                                )})
                        }

                </Slider>
            </div>






        </div>
    )
}
export default PopularCategories