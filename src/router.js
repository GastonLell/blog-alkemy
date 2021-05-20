// COMPONENTS REACT BOOTSTRAP
import { BrowserRouter, Switch, Route} from "react-router-dom";
// COMPONENTS

import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router