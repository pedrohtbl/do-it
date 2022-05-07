import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { useHistory } from "react-router-dom"

export const LoginContext = createContext()

export const LoginProvider = ({children}) =>{
    
    const history = useHistory()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@doIt:login")) || {})
    
    const login = (userData)=>{
        api.post("/user/login", userData)
        .then((response) =>{
            toast.success("Login Realizado")
            setUser(response.data)
            localStorage.setItem("@doIt:login", JSON.stringify(response.data))
            history.push("/dashboard")
        })
        .catch((err)=>{
            toast.error("email ou senha incorreto")
        })
    }

    const logout = (userData) =>{
        api.post("/user/logout",{
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