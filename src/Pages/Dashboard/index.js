import Card from "../../components/Card"
import { useLogin } from "../../Providers/Login"
import Input from "../../components/Input"
import { FiEdit2 } from "react-icons/fi"
import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import { CustomForm, CustomMain, CustomUl } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../Services/api"
import { useEffect, useState } from "react"

const Dashboard = () =>{

    const schema = yup.object().shape({
        description: yup.string().trim().min(1, "Escreva o nome da task")
    })

    const [tasks, setTasks] = useState([])

    useEffect(() =>{
        api.get("/task",{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then(response =>{
            setTasks(response.data.data)
        })
    },[tasks])

    const {user} = useLogin()

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>{
        api.post("/task", data,{
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        .then(response =>{
            console.log(response)
        })
    }
    
    return (
        <CustomMain>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors.description?.message} label={"7 de maio de 2021"} register={register} name={"description"} type="text" placeholder="Nova tarefa"><FiEdit2/></Input>
            <Button type={"submit"}>Adicionar</Button>
        </CustomForm>

        <CustomUl>
            {tasks.map(task => <Card key={task._id} id={task._id} description={task.description} createdAt={task.createdAt}/>)}
        </CustomUl>

        </CustomMain>
    )
}
export default Dashboard