import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Doctors from "../../components/Doctors/Doctors";
import PopularCamp from "../../components/PopularCamp/PopularCamp";
import PreviousCamp from "../../components/PreviousCamp/PreviousCamp";
import Testimonial from "../../components/Testimonial/Testimonial";
import Upcoming from "../../components/Upcoming/Upcoming";

const Home = () => {
    return (
        <div className="max-w-screen-lg mx-auto lg:px-0 px-2">
            <Helmet>
                <title>SAVE LIFE | HOME</title>
            </Helmet>
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