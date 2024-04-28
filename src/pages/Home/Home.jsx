import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Doctors from "../../components/Doctors/Doctors";
import PopularCamp from "../../components/PopularCamp/PopularCamp";
import PreviousCamp from "../../components/PreviousCamp/PreviousCamp";
import Testimonial from "../../components/Testimonial/Testimonial";
import Upcoming from "../../components/Upcoming/Upcoming";
import InfoGraph from "./InfoGraph";
import Album from "./Album";

const Home = () => {
    return (
        <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-4 px-2">
            <Helmet>
                <title>SAVE LIFE | HOME</title>
            </Helmet>
            <Banner></Banner>
            <InfoGraph></InfoGraph>
            <PopularCamp></PopularCamp>
            <Upcoming></Upcoming>
            <PreviousCamp></PreviousCamp>
            <Doctors></Doctors>
            <Album></Album>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;