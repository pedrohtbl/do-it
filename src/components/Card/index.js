import { CustomLi } from "./style"
import { FiCalendar, FiClipboard } from "react-icons/fi"
import  Button from "../Button"
import { useLogin } from "../../Providers/Login"
import api from "../../Services/api"
import { toast } from "react-toastify"


const Card = ({task}) =>{

    const {user} = useLogin()

    const {description, createdAt,_id,updatedAt,completed, owner,success} = task

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
    }
    
        return(
        <>
        <CustomLi id={_id} completed={completed}>
            <div>
                <FiClipboard/>
                <p>{description}</p>
                <button onClick={deleteTask}>x</button>
            </div>
            <span></span>
            <section>
                <FiCalendar/>
                <p>{new Date(createdAt).toLocaleDateString("pt-BR", {day: "2-digit",month: "long",year: "numeric"})}</p>
            </section>

            <Button onClick={completeTask}>{completed? "Refazer" : "Concluir"}</Button>
        </CustomLi>
        </>
    )
}

export default Card