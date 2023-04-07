
import './App.css';
import "./assets/style/index.scss"
import Header from "./components/header";
import SliderComponent from "./components/slider-component";
import PopularCategories from "./components/popular-categories";
import Section from "./components/section";
import Footer from "./components/footer";
import FeaturedProducts from "./components/featured-products";
import Router from "./router";
function App() {
  return (
    <div className="App">
      <Header />
        <Router />
        <Footer />
    </div>
  );
}

export default App;
