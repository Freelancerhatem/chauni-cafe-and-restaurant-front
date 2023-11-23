import { Helmet } from "react-helmet";
import About from "../../components/Layouts/About";
import Reservation from "../Reservation/Reservation";
import Banner from "./Banner/Banner";
import TopFood from "../TopFood/TopFood";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chauni Home</title>
                
            </Helmet>
           <Banner></Banner>
           <About></About>
           <TopFood></TopFood>
           <Reservation></Reservation>
        </div>
    );
};

export default Home;