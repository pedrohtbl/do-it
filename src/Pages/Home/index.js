import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import { CustomMain } from "./style"

const Home = () =>{
    const history = useHistory()

    return(
        <CustomMain>
            <h1>do<span>.</span>it</h1>
            <h2>Organize-se de forma fácil e efetiva</h2>
            <div>
                <Button white onClick={()=> history.push("/cadastro")}>Cadastre-se</Button>
                <Button onClick={()=> history.push("/login")} >Login</Button>
            </div> 
        </CustomMain>
    )
}

export default Home