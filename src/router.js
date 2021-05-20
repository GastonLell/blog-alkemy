// COMPONENTS REACT BOOTSTRAP
import { BrowserRouter, Switch, Route} from "react-router-dom";
// COMPONENTS

import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import PostStore from "./store/PostStore";

const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PostStore>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
                </PostStore>

               
            </Switch>
        </BrowserRouter>
    )
}

export default Router