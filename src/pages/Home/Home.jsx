import Banner from "../../components/Banner/Banner";
import Doctors from "../../components/Doctors/Doctors";
import PopularCamp from "../../components/PopularCamp/PopularCamp";
import PreviousCamp from "../../components/PreviousCamp/PreviousCamp";
import Testimonial from "../../components/Testimonial/Testimonial";
import Upcoming from "../../components/Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Upcoming></Upcoming>
            <PreviousCamp></PreviousCamp>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;