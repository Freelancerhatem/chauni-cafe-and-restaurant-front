import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect,signOut,GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const Googleprovider = new GoogleAuthProvider();

    const[user,setUser] = useState(null);
    const[loading,setloading] = useState(true);
    
    
    const googleLogin=()=>{
        setloading(true);
        return signInWithRedirect(auth, Googleprovider);
    }

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const LoginUser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const Subscribe = onAuthStateChanged(auth,currentUser=>{
            setloading(false);
            setUser(currentUser);
            

            
            const userMail ={useremail: currentUser.email};
            if(currentUser){
                axios.post('https://chauni-cafe-server.vercel.app/jwt',userMail,{withCredentials:true}   
                )
                .then()
                .catch(err=>console.log(err))
            }
            
        });
        return ()=> Subscribe();
    },[]);
    const authInfo = {
        googleLogin,
        createUser,
        loading,
        setloading,
        user,
        setUser,
        LoginUser,
        signOutUser,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;

