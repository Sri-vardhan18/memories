import React from 'react' 
import Post from './Post/Post' 
import {Grid, CircularProgress } from '@mui/material'  
import {useSelector} from 'react-redux' 
import makeStyle from './styles.js' 


const Posts = ({ setCurrectID }) => {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyle();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrectID={setCurrectID} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts