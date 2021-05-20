import { Container, Form, Button } from "react-bootstrap";
import postService from '../service/postService';
import {useParams} from 'react-router-dom'
import { useState, useEffect} from 'react';

const EditPost = () => {

    const {postId} = useParams();

    const [post, setPost] = useState({});

    const changePost = (e) => {
        e.preventDefault();

        setPost({...post,
            [e.target.name]: e.target.value
        })
    }

    const handleEditPost = (e) => {
        e.preventDefault();
        postService.editPost(postId, post).then(res => console.log(res))
    }

    useEffect(() => {
        postService.getPostById(postId).then(res => setPost(res))
    }, [postId])

    return(
        <Container fluid className="p-3">
            <Form onSubmit={handleEditPost}>

                <Form.Group className="py-1">
                <Form.Label>Titulo</Form.Label>
                    <Form.Control onChange={changePost} name="title" value={post.title} as="textarea" rows={3} />
                </Form.Group>

                <Form.Group  className="py-1">
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control onChange={changePost} name="body"  value={post.body} as="textarea" rows={3} />
                </Form.Group>

                <Button className="d-block m-auto my-3" variant="primary" type="submit">
                    Guardar
                </Button>
                
            </Form>
        </Container>
    )
}
export default EditPost;
