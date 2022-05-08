import Card from "../../components/Card"
import { useLogin } from "../../Providers/Login"
import Input from "../../components/Input"
import { FiEdit2 } from "react-icons/fi"
import { IoLogOutOutline } from "react-icons/io5"
import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import { CustomForm, CustomMain, CustomUl } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../Services/api"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Redirect } from "react-router-dom"
import { CircularProgress } from "@mui/material"

const Dashboard = () =>{

    const schema = yup.object().shape({
        description: yup.string().trim().min(1, "Escreva o nome da task")
    })
    
    const [uncompletedTasks, setUncompletedTasks ] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [teste, setTeste] = useState(false)
    const {user,logout} = useLogin()
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})
    
    useEffect(()=>{
        const getFalse = () =>{
            api.get("/task?completed=false",{
                headers: {
                    "Authorization" : `Bearer ${user.token}`
                }
            })
            .then(response =>{
                setUncompletedTasks(response.data.data)
                setIsLoading(true)
            })
        }
        getFalse()

    },[uncompletedTasks])
    

    useEffect(()=>{
        api.get("/task?completed=true",{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then(response =>{
            setCompletedTasks(response.data.data)
        })
    }, [completedTasks])

    if(!user.token){
        return <Redirect to={"/"}/>
    }

    const onSubmit = (data) =>{
        api.post("/task", data,{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then(response =>{
            toast.success("Task adicionada",{
                theme: "dark"
            })
        })
        .catch(err =>{
            toast.error("Ops, algo deu errado",{
                theme: "dark"
            })
        })
    }
    
    return (
        <CustomMain>
            <IoLogOutOutline onClick={logout}/>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors.description?.message} label={new Date().toLocaleDateString("pt-BR", {day: "2-digit",month: "long",year: "numeric"})} register={register} name={"description"} type="text" placeholder="Nova tarefa"><FiEdit2/></Input>
            <Button type={"submit"}>Adicionar</Button>
        </CustomForm>
        <div>
            <Button white onClick={()=>setTeste(!teste)}>{!teste? "Tasks Completas" : "Tasks Incompletas"}</Button>
        </div>
        
        <CustomUl>
            {!isLoading && <CircularProgress color="secondary"/>}
            {!teste ? uncompletedTasks.map(task => <Card task={task} key={task._id}/>) : completedTasks.map(task => <Card task={task} key={task._id}/>)} 
        </CustomUl>

        </CustomMain>
    )
}
export default Dashboard