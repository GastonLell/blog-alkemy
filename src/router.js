// COMPONENTS REACT BOOTSTRAP
import { BrowserRouter, Switch, Route} from "react-router-dom";
// COMPONENTS

import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import PostStore from "./store/PostStore";
import CreatePost from './pages/CreatePost';

const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PostStore>
                    <PrivateRoute exact path="/" component={Home} />

                    <PrivateRoute exact path="/newPost" component={CreatePost} />

                    <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
                    
                    <PrivateRoute exact path="/post/:postId" component={Detail} />
                </PostStore>
            </Switch>
        </BrowserRouter>
    )
}

export default Router