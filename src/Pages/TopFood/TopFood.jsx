
import { MdFoodBank, MdOutlineDoubleArrow } from "react-icons/md";
import TopFoodCard from "./TopFoodCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopFood = () => {
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        fetch('https://chauni-cafe-server.vercel.app/api/v1/sortCountData')
            .then(res => res.json())
            .then(data => setFoods(data));

    }, [])
    
    return (

        <div className="max-w-screen mt-8">
            <div className="flex mt-4 text-3xl uppercase justify-center items-center">
                    <MdFoodBank></MdFoodBank>
                    <h1 className="text-center  md:text-base lg:text-3xl md:font-bold text-orange-400">Top food menu</h1>
                    <MdOutlineDoubleArrow></MdOutlineDoubleArrow>
                </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 lg:mt-8">
                {

                    foods?.slice(0, 6)?.map((food, index) => <TopFoodCard key={index} food={food}></TopFoodCard>)
                }
               
            </div>
            <Link to={'/allitems'} className="w-full border"><button className="btn btn-outline  w-3/12  mx-auto flex bg-transparent border text-black hover:border-orange-300 hover:border-2 hover:bg-transparent hover:text-orange-300   btn-md text-center">SEE ALL</button></Link>
        </div>

    );
};

export default TopFood;