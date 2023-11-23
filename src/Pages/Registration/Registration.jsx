import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Registration = () => {
    const{createUser,setUser,user,signOutUser} =useContext(AuthContext);
    const navigate =useNavigate();

const handleCreateUser=e=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email,password)
    .then(()=>{
        
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          }).then(() => {

            Swal.fire({
                title: "Good job!",
                text: "Sign Up Success!",
                icon: "success"
              });

            setUser(auth.currentUser);
            signOutUser();
            navigate('/login')
            
          }).catch((error) => {
            console.log(error.message)
            

          });






    })
    .catch((error)=>{
        Swal.fire({
            title: "Failed!",
            text: error.message,
            icon: "error"
          });

    })
}
console.log(user)
    

    return (
        <div>
        
        <div className = "bg-gray-100" >
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <form onSubmit={handleCreateUser} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image URL</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="text" id="image" name="image" placeholder="provide your image link here" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Email</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="email" id="email" name="email" placeholder="your@mail.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400"
                            type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <div>
                        <button
                            className="w-full bg-orange-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-300 transition duration-300"
                            type="submit">Sign Up</button>
                            <span>Have  an account <Link to={'/login'}><span className="text-blue-500 underline">Login</span></Link></span>
                        </div>
                </form>
            </div>
        </div >
        </div>
    );
};

export default Registration;