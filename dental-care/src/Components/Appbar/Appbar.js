import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { StickyContainer} from 'react-sticky';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
       <StickyContainer>
      <AppBar position="static"  style={{backgroundColor:'#91C499'}}>

  
        <Toolbar>

          

        <div variant="h6" className={classes.title} style={{color:'white',fontSize:'25px'}}>
          Kishan Dental Care
          </div>
          
          
         
         
        </Toolbar>
      </AppBar>
      </StickyContainer>
    </div>
  );
}
