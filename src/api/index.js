import axios from 'axios';  

const url = 'https://memories2-80de9b8f5c71.herokuapp.com/posts' 


export const fetchPosts=()=> axios.get(url)  
export const createPosts=(newPost)=> axios.post(url, newPost)  
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const updatePost = (id, updatedata) => {
//     console.log('Update Request:', id, updatedata);
//     return axios.patch(`${url}/${id}`, updatedata);
//     };  

export const deleteActionPost = (id) => {
    return axios.delete(`${url}/${id}`, id);
}; 

export const likePost=(id)=> axios.patch(`${url}/${id}/likepost`) 



