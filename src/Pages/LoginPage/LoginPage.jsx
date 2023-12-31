import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import swal from 'sweetalert';

const LoginPage = () => {
    const{LoginUser,googleLogin}=useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        

        LoginUser(email,password)
        .then(()=>{
            
            Swal.fire({
                title: "Good job!",
                text: "Login Success!",
                icon: "success"
              });

              navigate(`${location?.state?  location.state : '/' }`)

        })
        .catch(()=>{
            Swal.fire({
                title: "Error!",
                text: "Login Failed!",
                icon: "error"
              });
        })
        form.email.value ='';
        form.password.value='';


    }

    const handleGoogleLogin=(e)=>{
        e.preventDefault()
        
        googleLogin()
        .then(()=>{

            swal("Good job!", "Login Succesfully!", "success");
            //   Swal.fire({
            //     title: "Good job!",
            //     text: "You clicked the button!",
            //     icon: "success"
            //   });

              navigate(location?.state?  location.state : '/')

        })

        
        .catch(()=>{
            console.log('error')
            Swal.fire({
                title: "Error!",
                text: "Login Failed!",
                icon: "error"
              });

        })
    }
    useEffect(()=>{
        const delay = setTimeout(() => {
            setIsLoading(false);
          }, 2000);
      
          
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

        <div>

            <div className="bg-gray-100" >
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
                    <form onSubmit={handleLogin}  className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                                type="password" id="password" name="password" placeholder="********" />
                        </div>

                        <div>
                        <button
                            className="w-full bg-orange-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-300 transition duration-300"
                            type="submit">Login</button>
                            <span>Have not an account <Link to={'/signup'}><span className="text-blue-500 underline">sign up</span></Link></span>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="btn w-full  h-14  bg-base-300 rounded-box place-items-center">Login With Google<FcGoogle className="text-xl"></FcGoogle></button>
                    </form>

                </div>
            </div >
        </div>

    );
};

export default LoginPage;