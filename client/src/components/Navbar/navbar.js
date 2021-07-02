import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

//import { Link } from 'react-router-dom';
import useStyles from './styles'



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClose = () => {
      setAnchorEl(null);
  }
    
  const openMenu = (event) => {
      setAnchorEl(event.currentTarget);
  }
    
  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} aria-controls="main-menu" color="inherit" aria-label="menu" onClick={openMenu}>
                      
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
                    Home
                </MenuItem>
              </Menu>
                         
              <Typography variant="h6" className={classes.title}>
                Todo App
              </Typography>
              <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;