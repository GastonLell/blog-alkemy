import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
    getPosts: () => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(url).then(res => res.data)) 
            reject("error al obtener posts!")
        })
    },
    getPostById: (idPost) => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(`${url}/${idPost}`).then(res => res.data)) 
            reject("error al obtener post!")
        })
    },
    editPost: (idPost, postEdit) => {
        return new Promise((resolve, reject) => {
            resolve(axios.put(`${url}/${idPost}`, postEdit).then(res => res)) 
            reject("error al editar post!")
        })
    },
    deletePost: (idPost) => {
        return new Promise((resolve, reject) => {
            resolve(axios.delete(`${url}/${idPost}`).then(res => res)) 
            reject("error al eliminar post!")
        })
    }
}