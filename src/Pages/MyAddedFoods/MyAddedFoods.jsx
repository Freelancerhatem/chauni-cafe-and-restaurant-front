import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAddedFoodCard from "./MyAddedFoodCard/MyAddedFoodCard";
import error from '../../assets/images/errorData.png'
import { Helmet } from "react-helmet";

const MyAddedFoods = () => {
    const{user}=useContext(AuthContext);
    const email = user.email;
    const[MyaddedFood,setMyaddedFood] = useState(null);
    const[isLoading,setIsLoading]=useState(true);
    console.log(MyaddedFood)
    const url = `https://chauni-cafe-server.vercel.app/api/v1/myFood?useremail=${email}`
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
           return res.json()
        })
        .then(data=>setMyaddedFood(data))
    },[url]);
    // custom loading
    
    useEffect(()=>{
        const delay = setTimeout(() => {
            setIsLoading(false);
          }, 1000);
      
          
          return () => clearTimeout(delay);
    },[])
    
    if(isLoading){
        return(
            <div className="w-screen h-[80vh] flex items-center justify-center">
                 <span className="loading loading-dots mx-auto loading-lg"></span>
            </div>
        )
    }
    
    return (
        <div className="max-w-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Food</title>
                
            </Helmet>
            {   MyaddedFood.length>0
                ?
                MyaddedFood?.map((addedFood,index)=><MyAddedFoodCard key={index} addedFood={addedFood}></MyAddedFoodCard>)
                :
                <div className="h-[90vh] flex flex-col items-center justify-center">
                    <img src={error} alt="error" />
                        <h1 className=" text-3xl">No Data Added Yet</h1>
                </div>
            }
        </div>
    );
};

export default MyAddedFoods;