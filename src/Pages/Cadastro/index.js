import { CustomMain } from "./style"
import sapiens from "../../assets/sapiens1.svg"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { FiMail,FiLock,FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

const Cadastro = () =>{
    return (
        <>
        <CustomMain>
            <figure>
                <img src={sapiens} alt="sapiens"/>
            </figure>
            <form>
                <h1>Cadastro</h1>
                <Input placeholder="Seu nome completo" type="text" label={"Nome"}><FiUser/></Input>
                <Input placeholder="Seu melhor email" type="email" label={"Email"}><FiMail/></Input>
                <Input placeholder="Uma senha bem segura" type="password" label={"Senha"}><FiLock/></Input>
                <Input placeholder="Confirmação da senha" type="password" label={"Confirmação da senha"}><FiLock/></Input>
                <Button type={"submit"}>Enviar</Button>
                <p>Já tem uma conta? Faça <Link to={"/login"}>Login</Link></p>
            </form>

        </CustomMain>
        </>
    )
}
export default Cadastro