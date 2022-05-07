import { useLogin } from "../../Providers/Login"

const Dashboard = () =>{
    const {user} = useLogin()
    console.log(user)
    return (
        <>
        <h1>Dashboard</h1>
        </>
    )
}
export default Dashboard