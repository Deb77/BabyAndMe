import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button, Typography} from '@material-ui/core';

import Logo from '../Images/Baby.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavElements';
import AdminLogin from '../Components/AdminLogin/AdminLogin';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: 60,
      height: 60,
      
    },
    heading:{
    fontFamily: 'weasthood',
    fontSize: 40 ,
    fontWeight: 600,
      color: '#1a4e8e',
  },
  button: {
    backgroundColor: "#E5C0C8"
  }

  }));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();

  const openModal = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
            <Avatar alt="BabyLogo" src={Logo} className={classes.large} />
            <Typography className={classes.heading}>&Me</Typography>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/breastfeeding-center' activeStyle>
            Locate Breastfeeding Centers
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <Button className={classes.button} variant="contained" onClick={()=>openModal()}>
            Donation
          </Button>
        </NavMenu>
        <AdminLogin open={open} handleClose={handleClose}/>
      </Nav>
    </>
  );
};

export default Navbar;