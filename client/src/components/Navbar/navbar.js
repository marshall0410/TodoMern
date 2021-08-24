import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';


import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';

// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';

import useStyles from './styles'



const Navbar = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  // const handleClose = () => {
  //     setAnchorEl(null);
  // }
    
  // const openMenu = (event) => {
  //     setAnchorEl(event.currentTarget);
  // }

  const logoutHandler = () => {
    dispatch(logout(history));
  }
    
  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          
          {/* <IconButton edge="start" className={classes.menuButton} aria-controls="main-menu" color="inherit" aria-label="menu" onClick={openMenu}>
              <MenuIcon />
            </IconButton> 
                      
            <Menu
              id='main-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>                
              <Link to="/">Home</Link>
            </MenuItem>            
            </Menu>                       */}
            <Typography variant="h6" className={classes.title}>
              Todo App
            </Typography>
            {/* <Button color="inherit">
              <Link to="/auth">Login</Link>  
            </Button> */}
              <Button variant="outlined" className={classes.logout} onClick={logoutHandler}>
                Logout
              </Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;