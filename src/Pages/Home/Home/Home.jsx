import About from "../About/About";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimomial/Testimonial";
import Time from "../Time/Time";



const Home = () => {
    return (
        <div className="container mx-auto">
        <CarouselSlider />
        <About />
        <Services />
        <Time />
        <Products />
        <Team />
        <Features />
        <Testimonial />
        </div>
    );
};

export default Home;