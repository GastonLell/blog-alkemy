//HOOKS
import { useState, useEffect} from 'react';
//REACT ROUTER
import {Link, useParams} from 'react-router-dom'
//SERVICES
import postService from '../service/postService';
//COMPONENTS REACT-BOOTSTRAP
import {Card, Button, Container} from 'react-bootstrap';

const Detail = () => {

    const {postId} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getPostById(postId).then(res => setPost(res))
    }, [postId])

    return (
        <Container style={{"min-height": "60vh"}} className="d-flex justify-content-center align-items-center">
            <Card>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Button className="d-block m-auto" variant="primary">
                        <Link 
                            style={{"text-decoration": "none"}} 
                            className="text-light" to={`/post/edit/${post.id}`}
                        >
                            Editar
                        </Link>    
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Detail;