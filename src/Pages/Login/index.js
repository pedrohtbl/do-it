import { CustomMain } from "./style"
import sapiens from "../../assets/sapiens2.svg"
import Input from "../../components/Input"
import { FiMail,FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import { useLogin } from "../../Providers/Login"
import { Redirect } from "react-router-dom"

const Login = () =>{

    const schema = yup.object().shape({
        email: yup.string().required("Preencha o campo").email("Email inválido"),
        password: yup.string().required("Preencha o campo")
    })

    const {login,user} = useLogin()

    const {handleSubmit,register, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    if(user.token){
        return <Redirect to="/dashboard"/>
    }

    const onSubmit = (data) =>{
        login(data)
    }

    return (
        <>
        <CustomMain>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Input errors={errors.email?.message} register={register} type="email" name={"email"} label={"Email"} placeholder="Seu email"><FiMail/></Input>
                <Input errors={errors.password?.message} register={register} type="password" name={"password"} label={"Senha"} placeholder="Sua senha ultra secreta"><FiLock/></Input>
            
                <Button type="submit">Enviar</Button>

                <p>Não tem conta? <Link to={"/cadastro"}>Faça seu cadastro</Link></p>
            </form>
            <figure>
                <img src={sapiens} alt="sapiens"/>
            </figure>
        </CustomMain>
        </>
    )
}
export default Login