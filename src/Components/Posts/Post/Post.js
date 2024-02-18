import React from 'react' 
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material' 
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import useStyles from './styles.js' 
import moment from 'moment'; 
import { deletePost, likeActionPost } from '../../../action/posts.js'; 
import {useDispatch} from 'react-redux'

function Post({ post, setCurrectID }) {
  const classes = useStyles();   
  const dispatch = useDispatch()
  
const deleteId=(id)=>{
  dispatch(deletePost(id))
} 

const likePost=(id)=>{ 
  
  dispatch(likeActionPost(id))
}
 

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrectID(post._id)}><MoreHorizSharpIcon /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{Array.isArray(post.tags) && post.tags.map((tag) => `#${tag}`)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {likePost(post._id)}}><ThumbUpAltRoundedIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => { deleteId(post._id) }}><DeleteRoundedIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
}

export default Post