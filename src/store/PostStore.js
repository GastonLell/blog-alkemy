//HOOKS
import {useState, useEffect, createContext} from 'react';
//SERVICE
import postService from '../service/postService';

//CREAR CONTEXTO GLOBAL
export const StorePosts = createContext();

const PostStore = ({children}) => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        postService.getPosts()
        .then(res => setAllPosts(res))
        .catch(err => console.log(`Error al traer data en postStore ${err}`))
    }, [])

    return(
        <StorePosts.Provider value={[allPosts, setAllPosts]}>
            {children}
        </StorePosts.Provider>
    )
}
export default PostStore;