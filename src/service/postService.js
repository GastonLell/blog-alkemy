import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

export default {
    getPosts: () => {
        return new Promise((resolve, reject) => {
            resolve(axios.get("/").then(res => res.data)) 
            reject("error al obtener posts!")
        })
    },
    getPostById: (idPost) => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(`/${idPost}`).then(res => res.data)) 
            reject("error al obtener post!")
        })
    },
    createPost: (newPost) => {
        return new Promise((resolve, reject) => {
            resolve(axios.post(`/`, newPost).then(res => res)) 
            reject("error al crear post!")
        })
    },
    editPost: (idPost, postEdit) => {
        return new Promise((resolve, reject) => {
            resolve(axios.put(`/${idPost}`, postEdit).then(res => res)) 
            reject("error al editar post!")
        })
    },
    deletePost: (idPost) => {
        return new Promise((resolve, reject) => {
            resolve(axios.delete(`/${idPost}`).then(res => res)) 
            reject("error al eliminar post!")
        })
    }
}