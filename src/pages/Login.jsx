// HOOKS
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
//FORMIK AND YUP
import {useFormik} from 'formik';
import * as Yup from 'yup';
// SERVICES
import auth from "../service/auth";

// COMPONENTS REACT-BOOTSTRAP
import { Container, Form, Button } from "react-bootstrap";


const Login = () => {

  const history = useHistory();
  
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: Yup.object({
        email: Yup.string()
            .email("El email no es valido")
            .required('El email es requerido'),
        password: Yup.string()
            .required('Debe ingresar su contraseña')
            .min(4, 'Debe contener mas de cuatro carácteres'),
    }),
    onSubmit: (formData) => {

      auth.signUp(formData).then(res => {

        localStorage.setItem("token", res.data.token);

        history.push("/");
        
      }).catch(err => alert(`Error al autenticar usuario ${err}`));
    }
  })


  return (

    <Container fluid className="p-3">

      <Form  noValidate  className="w-50 m-auto"  onSubmit={formik.handleSubmit}>

          <Form.Group className="py-1">
              <Form.Label>Titulo</Form.Label>

              <Form.Control
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                  type="email"
                  rows={3}
              />

              <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
              </Form.Control.Feedback>

          </Form.Group>

          <Form.Group  className="py-1">

              <Form.Label>Contenido</Form.Label>

              <Form.Control 
                  name="password" 
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                  type="password" 
                  rows={5}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
              </Form.Control.Feedback>
          </Form.Group>

          <Button className="d-block m-auto my-3" variant="primary" type="submit">
              Ingresar
          </Button>
          
      </Form>
    </Container>
  );
};

export default Login;