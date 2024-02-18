import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import { getPosts } from './action/posts';
import makeStyle from './styles';
import memories from './images/memories.png'; 
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material/";

function App() {    
  const classes= makeStyle() 
  const dispatch = useDispatch()  
  const [currentID, setCurrectID] = useState(null) 
  

  useEffect(()=>{
    
    dispatch(getPosts())

  },[dispatch]) 

  return ( 
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.maincontainer}justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  setCurrectID={setCurrectID}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID}  setCurrectID={setCurrectID}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
