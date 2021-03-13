//react
import React from 'react'
import { Link } from "react-router-dom";

//mui

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


//custom


const useStyles = makeStyles((theme) => ({
    
  heading:{
    fontSize: 40 ,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 10,
    paddingRight: 1000,
},

    

  }));
  
function Footer() {
    const classes = useStyles();
    
    return (
        <>
        <nav className="footer">
            <div className="footer-container">
                <Link to="/" className="footer-logo" >
                <Typography className={classes.heading}>BABY & ME</Typography>
                </Link>
            </div>     
        </nav>
        
        </>
    )
}

export default Footer