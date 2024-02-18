import * as api from '../api/index';  

export const getPosts=()=> async(dispatch)=>{
    try{
        const {data } = await api.fetchPosts()   
        dispatch({type:'FETCH_ALL', payload:data})
    }
    catch(error){
        console.log(error.message)
    }
} 

export const createPost =(post)=> async(dispatch)=>{
    try{
        const {data} = await api.createPosts(post)  
        console.log('data', data)
        dispatch({type:'CREATE' , payload: data})
    } 
    catch(error){
        console.log(error.message)

    }
} 
 
export const updatePost = (id, updatedata) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedata); 
        console.log('data333', data)
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}; 

export const deletePost = (id) => async (dispatch) => {
    console.log('deleted id');
    try {
        await api.deleteActionPost(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}; 

export const likeActionPost=(id)=>async(dispatch)=>{
    try{ 
        console.log('id')
        const {data}= await api.likePost(id)  
        console.log("data", data)
        dispatch({type:'LIKE', payload:data})
    }
    catch(error){
        console.log(error)
    }
}
