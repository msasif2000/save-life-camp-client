import Banner from "../../components/Banner/Banner";
import PopularCamp from "../../components/PopularCamp/PopularCamp";
import Upcoming from "../../components/Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;