import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrdersFood from "./OrdersFood/OrdersFood";
import Swal from "sweetalert2";
import error from '../../assets/images/emptycart.png'
import { Helmet } from "react-helmet";

const MyOrders = () => {
    const{user}=useContext(AuthContext);
    const email = user.email;
    const[MyOrderData,setMyOrderData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    

    useEffect(()=>{
        fetch(`https://chauni-cafe-server.vercel.app/api/v1/myOrders?useremail=${email}`)
        .then((res)=>res.json())
        .then(data=>setMyOrderData(data))
    },[email]);
    
    useEffect(()=>{
        const delay = setTimeout(() => {
            setIsLoading(false);
          }, 1000);
      
          
          return () => clearTimeout(delay);
    },[])

    // console.log(MyOrderData)
    
    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chauni-cafe-server.vercel.app/api/v1/myOrders/${id}`,{
            method:'DELETE'
        })
        .then((res) => res.json())
            .then((data) => {
                console.log(data,'deleted succes');

                const foodRemaining =MyOrderData?.filter(foodData=>foodData._id != id);
                setMyOrderData(foodRemaining) 
                

            });



              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });



        
       
    }
    if(isLoading){
        return(
            <div className="w-screen h-[80vh] flex items-center justify-center">
                 <span className="loading loading-dots mx-auto loading-lg"></span>
            </div>
        )
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Order</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center my-12">
                <h1 className=" text-3xl text-orange-400 underline">My Order List</h1>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-12">
                {   MyOrderData?.length>0
                    ?
                    MyOrderData?.map((orderData,index)=><OrdersFood key={index} orderData={orderData} handleDelete={handleDelete}></OrdersFood>)
                    :
                    <div className="h-[60vh] w-screen flex flex-col items-center justify-center">
                    <img src={error} alt="error" />
                        <h1 className=" text-3xl">Your Cart is Empty</h1>
                </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;