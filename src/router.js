import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router