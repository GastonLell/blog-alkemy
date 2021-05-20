//HOOKS
import { useContext } from 'react';
//CONTEXT GLOBAL
import { StorePosts } from '../../store/PostStore';
//COMPONENTS REACT-BOOTSTRAP
import { Row } from 'react-bootstrap';
//COMPONENTS
import Post from '../Post/Post';


const ListPosts = () => {

    const [allPosts] = useContext(StorePosts);

    return (
        <Row className="m-0 d-flex justify-content-between">
            {

                allPosts?.map(item => {
                    return (
                        <Post key={item.id} title={item.title} id={item.id} />
                    )
                })
            }

        </Row>
    )
}
export default ListPosts;
