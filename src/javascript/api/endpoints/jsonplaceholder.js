import axios from '../config'

const postsAPI = {
  getPosts: () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  },
  getPost: (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  },
  getComments: (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  },
  getUser: (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}

export default postsAPI