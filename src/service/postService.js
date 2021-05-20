import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";

export default {
    getPosts: () => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(url).then(res => res.data)) 
            reject("error al obtener posts!")
        })
    }
}