import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography} from '@material-ui/core';

import Logo from '../Images/Baby.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavElements';

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
    color: '#1a4e8e' ,
},

  }));

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <Avatar alt="BabyLogo" src={Logo} className={classes.large} />
            <Typography className={classes.heading}>&Me</Typography>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/LacSen' activeStyle>
            Locate Lactation Centers
          </NavLink>
          <NavLink to='/Donation' activeStyle>
            Donation
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;