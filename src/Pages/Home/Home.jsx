import { Helmet } from "react-helmet";
import About from "../../components/Layouts/About";
import Reservation from "../Reservation/Reservation";
import Banner from "./Banner/Banner";
import TopFood from "../TopFood/TopFood";
import Footer from "../../components/Layouts/Footer";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Homepage</title>
                
            </Helmet>
           <Banner></Banner>
           <About></About>
           <TopFood></TopFood>
           <Reservation></Reservation>
           <Footer></Footer> 
        </div>
    );
};

export default Home;