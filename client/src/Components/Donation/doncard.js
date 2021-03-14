//react
import React, { Fragment } from 'react';
//import { Link } from "react-router-dom";


//Mui
 import { makeStyles } from '@material-ui/core/styles';
 import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
 import CardActionArea from '@material-ui/core/CardActionArea';
 import CardContent from '@material-ui/core/CardContent';
 import CardMedia from '@material-ui/core/CardMedia';
 import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//Custom Components



  const useStyles = makeStyles((theme) => ({
    
   }));
const DonationCard =(props) => {
    const { place,location,bottle_count,number } = props;

    const classes = useStyles();
    
    return(
        <Fragment>
            <Card className={classes.root} raised={true}>
                    <CardContent className={classes.cardcolor}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {place}, {location}.
                    </Typography>
                    <Typography variant="body2" component="p">
                    Available Bottles : {bottle_count}
                    
                    </Typography>
                    <Typography variant="body2" component="p">Phone Number : {number}</Typography>
                    </CardContent>
            </Card>
        </Fragment>
    )    
};

export default DonationCard;