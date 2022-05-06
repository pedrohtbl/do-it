import { Switch, Route  } from "react-router-dom"
import Cadastro from "../Pages/Cadastro"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Login from "../Pages/Login"

const Routes = () =>{
    return(
        <>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route exact path={"/cadastro"}>
                <Cadastro/>
            </Route>
            <Route exact path={"/login"}>
                <Login/>
            </Route>
            <Route exact path={"/dashboard"}>
                <Dashboard/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes