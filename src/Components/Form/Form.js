import React,{useState, useEffect} from 'react' 
import {Typography, TextField, Button, Paper } from '@mui/material' 
import makestyle from './styles' 
import FileBase64 from 'react-file-base64' 
import {useDispatch, useSelector} from 'react-redux'  
import { createPost, updatePost } from '../../action/posts'


function Form({currentID, setCurrectID}) {  
  const post= useSelector(state=> currentID ? state.posts.find((p)=>p._id ===currentID) : null) 
 
  const classes = makestyle()  
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({creator:'', message:'', tags:[],title:'', selectedFile:'' })  

  const clear = () => {
    setCurrectID(0);
    setPostData({ creator: '', title: '', message: '', tags: [], selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentID === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentID, postData));
      clear();
    }
  };

  useEffect(() => {
    if (post) {
      setPostData({
        creator: post.creator || '',
        title: post.title || '',
        message: post.message || '',
        tags: post.tags || '',
        selectedFile: post.selectedFile || '',
      });
    }
  }, [post]);
  
    


  return (
    <Paper className={classes.Paper}> 
    <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
    <Typography variant='h6'>{currentID ?"Editing": "Creating"} a memory</Typography> 
    <TextField name ='creator' label='Creator' variant='outlined' fullWidth value = {postData.creator}  onChange={(e)=>setPostData({...postData, creator:e.target.value})} />
    <TextField name ='title' label='Title' variant='outlined' fullWidth value = {postData.title}  onChange={(e)=>setPostData({...postData, title:e.target.value})} /> 
    <TextField name ='message' label='Message' variant='outlined' fullWidth value = {postData.message}  onChange={(e)=>setPostData({...postData, message:e.target.value})} />
    <TextField name ='tags' label='Tags' variant='outlined' fullWidth value = {postData.tags}  onChange={(e)=>setPostData({...postData, tags:e.target.value.split(',')})} /> 
    <div className={classes.fileInput}> 
    <FileBase64 type='file' multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile:base64})}/>
     </div> 
     <Button className={classes.buttonSubmit} variant='contained' sise='large' color= 'primary' type ='submit' fullWidth> Submit</Button> 
     <Button variant="contained" className={classes.buttonSubmit} color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    

  

    </form>

    </Paper>
  )
}

export default Form