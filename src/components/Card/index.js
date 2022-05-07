import { CustomLi } from "./style"
import { FiCalendar, FiClipboard } from "react-icons/fi"
import  Button from "../Button"


const Card = ({description,createdAt}) =>{
    
        return(
        <>
        <CustomLi>
            <div>
                <FiClipboard/>
                <p>{description}</p>
            </div>
            <span></span>
            <section>
                <FiCalendar/>
                <p>{new Date(createdAt).toLocaleDateString("pt-BR", {day: "2-digit",month: "long",year: "numeric"})}</p>
            </section>
            <Button>Concluir</Button>
        </CustomLi>
        </>
    )
}

export default Card