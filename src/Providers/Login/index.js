import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";

export const LoginContext = createContext()

export const LoginProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@doIt:login")) || {})
    const history = useHistory()

    const login = (userData)=>{
        api.post("/login", userData)
        .then(response =>{
            setUser(response)
            localStorage.setItem("@doIt:login", JSON.stringify(response))
            return history.push("/dashboard")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const logout = (userData) =>{
        api.post("/logout",{
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        })
        .then(response =>{
            localStorage.removeItem("doIt:login")
        })
    }

    return(
        <LoginContext.Provider value={{user,login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)