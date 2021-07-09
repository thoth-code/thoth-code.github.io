import axios from 'axios';

export async function getAllNote() {
    return axios.get('http://localhost:3000/post-it')
        .then(res => res.data)
        .catch(err => console.log(err));
}