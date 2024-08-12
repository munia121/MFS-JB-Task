/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthPrivet = ({children}) => {
   const [token, setToken] = useState(localStorage.getItem('token'))

   const login = (newToken) =>{
    localStorage.setItem('token', newToken)
    setToken(newToken)
   }

   const logout = () =>{
    localStorage.removeItem('token')
    setToken(null)
   }


   const [user, setUSer] = useState(null)
   console.log(user)

   useEffect(() =>{

    const currentUser = async() =>{
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/me', {
                headers:{
                    Authorization: `Bearer ${token}`
                },
            })
            setUSer(response.data.user)
        } catch(error){
            console.log("Fail to fetch user data", error)
        }
    };
    currentUser()

   },[])

   const info = {
    token, 
    login, 
    logout, 
    user
   }

   return(
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
   )
};

export const useAuth = () => useContext(AuthContext)
