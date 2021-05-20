//HOOKS
import { useContext } from 'react';
//CONTEXT GLOBAL
import { StorePosts } from '../../store/PostStore';
//SERVICES
import postService from "../../service/postService";
//COMPONENTS REACT-BOOTSTRAP
import { Row } from 'react-bootstrap';
//COMPONENTS
import Post from '../Post/Post';

const ListPosts = () => {

    const [allPosts, setAllPost] = useContext(StorePosts);

    const deletePostById = (e, idPost) => {
        e.preventDefault();
        
        postService.deletePost(idPost).then(res => console.log(res))
        .catch(err => console.log(err))

        const newArrData = allPosts.filter(item => item.id != idPost);
        setAllPost(newArrData);
    }

    return (
        <Row className="m-0 d-flex justify-content-between">
            {

                allPosts?.map(item => {
                    return (
                        <Post key={item.id} title={item.title} id={item.id} deletePostById={deletePostById} />
                    )
                })
            }

        </Row>
    )
}
export default ListPosts;
