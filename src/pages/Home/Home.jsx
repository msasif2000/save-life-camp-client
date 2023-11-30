import Banner from "../../components/Banner/Banner";
import PopularCamp from "../../components/PopularCamp/PopularCamp";
import PreviousCamp from "../../components/PreviousCamp/PreviousCamp";
import Upcoming from "../../components/Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Upcoming></Upcoming>
            <PreviousCamp></PreviousCamp>
        </div>
    );
};

export default Home;