import { CustomMain } from "./style"
import sapiens from "../../assets/sapiens1.svg"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { FiMail,FiLock,FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import api from "../../Services/api"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import { useLogin } from "../../Providers/Login"
import { Redirect } from "react-router-dom"

const Cadastro = () =>{
    const schema = yup.object().shape({
        name: yup.string().required("Preencha o campo").trim(),
        email: yup.string().email("Email inválido").required("Preencha o campo").trim(),
        password: yup.string().required("Preencha o campo").min(8, "minimo 8 caracteres").trim(),
        passwordConfirm: yup.string().required("Preencha o campo").oneOf([yup.ref("password")],"senhas não são iguais")
    })
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const history = useHistory()

    const {user} = useLogin()

    if(user.token){
        return <Redirect to="/dashboard"/>
    }

    const onSubmit = (data) =>{
        const {name,email,password} = data
        api.post("/user/register", {name:name, email:email, password:password})
        .then(response =>{ 
            toast.success("usuário cadastrado") 
            history.push("/login")
        })
        .catch((err) => 
            toast.error("algo deu errado")
        )
    } 

    return (
        <>
        <CustomMain>
            <figure>
                <img src={sapiens} alt="sapiens"/>
            </figure>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastro</h1>
                <Input errors={errors.name?.message} register={register} name={"name"} placeholder="Seu nome completo" type="text" label={"Nome"}><FiUser/></Input>
                <Input errors={errors.email?.message} register={register} name={"email"} placeholder="Seu melhor email" type="email" label={"Email"}><FiMail/></Input>
                <Input errors={errors.password?.message} register={register} name={"password"} placeholder="Uma senha bem segura" type="password" label={"Senha"}><FiLock/></Input>
                <Input errors={errors.passwordConfirm?.message} register={register} name={"passwordConfirm"} placeholder="Confirmação da senha" type="password" label={"Confirmação da senha"}><FiLock/></Input>
                <Button type={"submit"}>Enviar</Button>
                <p>Já tem uma conta? Faça <Link to={"/login"}>Login</Link></p>
            </form>

        </CustomMain>
        </>
    )
}
export default Cadastro