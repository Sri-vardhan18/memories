import { makeStyles } from '@mui/styles' 

const makeStyle= makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  '@media (max-width: 319px)': {
    maincontainer: {
      flexDirection: 'column',
    }, 
  }
  
})); 

export default makeStyle

