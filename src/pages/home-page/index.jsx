import SliderComponent from "../../components/slider-component";
import PopularCategories from "../../components/popular-categories";
import Section from "../../components/section";
import FeaturedProducts from "../../components/featured-products";

const HomePage=()=>{
    return(
        <div>
            <SliderComponent />
            <PopularCategories />
            <Section />
            <FeaturedProducts />
            <SliderComponent />
        </div>
    )
}
export default HomePage