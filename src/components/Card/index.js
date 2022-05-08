import { CustomLi } from "./style"
import { FiCalendar, FiClipboard } from "react-icons/fi"
import  Button from "../Button"
import { useLogin } from "../../Providers/Login"
import api from "../../Services/api"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material"


const Card = ({task}) =>{

    const {user} = useLogin()

    const {description, createdAt,_id,completed} = task
    const [isLoading, setIsLoading] = useState(false)

    const completeTask = () =>{
        api.put(`/task/${_id}`, {completed: !completed},{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then( response =>{
            toast.success(completed ? "Task restaurada" : "Task concluída",{
                theme: "dark"
            })
            setIsLoading(true)
        })
        .catch(err =>{
            toast.error("Ops, algo deu errado",{
                theme: "dark"
            })
        })
    }

    const deleteTask = () =>{
        api.delete(`/task/${_id}`,{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then( response =>{
            toast.success("Task removida",{
                theme: "dark"
            })
        })
        .catch(err =>{
            toast.error("Ops, algo deu errado",{
                theme: "dark"
            })
        })
    }

        return(
        <CustomLi id={_id} completed={completed}>
        <button onClick={deleteTask}>x</button>
        <div>
            <FiClipboard/>
            <p>{description}</p>
        </div>
        <span></span>
        <section>
            <FiCalendar/>
            <p>{new Date(createdAt).toLocaleDateString("pt-BR", {day: "2-digit",month: "long",year: "numeric"})}</p>
        </section>
            
        <Button onClick={completeTask}>{completed? "Restaurar" : "Concluir"}</Button>
        </CustomLi>
    )
}

export default Card