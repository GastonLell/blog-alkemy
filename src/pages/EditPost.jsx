//HOOKS
import { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
//SERVICES
import postService from '../service/postService';
//FORMIK AND YUP
import {useFormik} from 'formik';
import * as Yup from 'yup';
//COMPONENTS REACT-BOOTSTRAP
import { Container, Form, Button } from "react-bootstrap";


const EditPost = () => {

    const {postId} = useParams();

    const [post, setPost] = useState({});

    const formik = useFormik({
        initialValues: {
            title: post.title,
            body: post.body,
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('El titulo es requerido')
                .min(2, 'Debe contener mas de dos carácteres'),
            body: Yup.string()
                .required('Debe desarrollar el contenido')
                .min(2, 'Debe contener mas de dos carácteres'),
        }),
        onSubmit: (formData) => {
            postService.editPost(postId, formData).then(res => console.log(res))
        }
    })

    useEffect(() => {
        postService.getPostById(postId).then(res => setPost(res))
    }, [])

    return(
        <Container fluid className="p-3">
            <Form  noValidate  onSubmit={formik.handleSubmit}>

                <Form.Group className="py-1">
                    <Form.Label>Titulo</Form.Label>

                    <Form.Control
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        isValid={formik.touched.title && !formik.errors.title}
                        isInvalid={formik.touched.title && formik.errors.title}
                        as="textarea"
                        rows={3}
                    />

                    <Form.Control.Feedback type="invalid">
                        {formik.errors.title}
                    </Form.Control.Feedback>

                </Form.Group>

                <Form.Group  className="py-1">

                    <Form.Label>Contenido</Form.Label>

                    <Form.Control 
                        name="body" 
                        onChange={formik.handleChange}
                        value={formik.values.body}
                        isValid={formik.touched.body && !formik.errors.body}
                        isInvalid={formik.touched.body && formik.errors.body}
                        as="textarea" 
                        rows={5}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.body}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button className="d-block m-auto my-3" variant="primary" type="submit">
                    Guardar
                </Button>
                
            </Form>
        </Container>
    )
}
export default EditPost;
