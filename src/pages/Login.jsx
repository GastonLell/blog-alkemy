// HOOKS
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

// SERVICES
import auth from "../service/auth";

// COMPONENTS REACT-BOOTSTRAP
import { Container, Form, Button } from "react-bootstrap";


const Login = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChangeUser = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitUser = (e) => {

    e.preventDefault();

    auth.signUp(user).then(res => {

      localStorage.setItem("token", res.data.token);

      history.push("/");
      
    }).catch(err => alert("ver validacion con formik"))
  }

  return (
    <Container fluid className="py-5">

      <Form className="w-50 m-auto" onSubmit={handleSubmitUser}>

        <Form.Group >

          <Form.Label>Email:</Form.Label>

          <Form.Control
            name="email" 
            type="email" 
            placeholder="Ingrese su email"
            value={user.email}
            onChange={handleChangeUser}
          />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">

          <Form.Label>Contraseña</Form.Label>

          <Form.Control 
            name="password"  
            type="password" 
            placeholder="Ingrese su contraseña" 
            value={user.password}
            onChange={handleChangeUser}
          />

        </Form.Group>

        <Button variant="primary" type="submit" className="mx-auto my-3">
          Ingresar
        </Button>

      </Form>

    </Container>
  );
};

export default Login;