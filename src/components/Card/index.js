import { CustomLi } from "./style"
import { FiCalendar, FiClipboard } from "react-icons/fi"
import  Button from "../Button"
import { useLogin } from "../../Providers/Login"
import api from "../../Services/api"


const Card = ({task}) =>{

    const {user} = useLogin()

    const {description, createdAt,_id,updatedAt,completed, owner,success} = task

    const completeTask = () =>{
        api.put(`/task/${_id}`, {completed: true},{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
    }
    
        return(
        <>
        <CustomLi id={_id}>
            <div>
                <FiClipboard/>
                <p>{description}</p>
            </div>
            <span></span>
            <section>
                <FiCalendar/>
                <p>{new Date(createdAt).toLocaleDateString("pt-BR", {day: "2-digit",month: "long",year: "numeric"})}</p>
            </section>
            <Button onClick={completeTask}>Concluir</Button>
        </CustomLi>
        </>
    )
}

export default Card