//HOOKS
import { useContext} from 'react';
//CONTEXT GLOBAL
import {StorePosts} from '../store/PostStore';
//SERVICES
import postService from '../service/postService';
//COMPONENTS REACT-BOOTSTRAP
import {Container, Form, Button} from 'react-bootstrap';
import Formulario from '../components/Formulario/Formulario';

const CreatePost = () => {

    const [allPosts, setAllPosts] = useContext(StorePosts)
    
    const handleCreatePost = (post) => {
        postService.createPost(post).then(res => {
            setAllPosts([
                ...allPosts,
                res.data
            ])
        })
    }

    return(
        <Container>

            <Formulario handleSubmit={handleCreatePost} />

        </Container>
    )

}
export default CreatePost;