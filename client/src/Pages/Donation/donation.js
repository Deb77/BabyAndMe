//react
import React, { Fragment,useEffect, useState } from 'react';
import axios from 'axios';
//import { Link } from "react-router-dom";


//Mui
 import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
 import Button from '@material-ui/core/Button';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

//Custom Components
import DonationPic from '../../Images/9569.png'
import DonCard from '../../Components/Donation/doncard'
import AppMod from '../../Components/Donation/appmodal';


  const useStyles = makeStyles((theme) => ({
    h1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '4.5rem',
        marginBottom: '3rem',
        color: '#000',
        marginLeft: '-10rem'
    },
    p: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1rem',
        paddingRight:'10rem',
        //textAlign: 'center',
    },
    box1:{
        marginTop: '2rem',
        backgroundColor: '#efb4bb',
    },
    button:{
        marginTop: '3rem',
        
    },
   }));
const Donation =() => {
    
    const [data,getData]= useState([]);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const classes = useStyles();
    const handleClose = () => setOpen(false);
    useEffect(()=>{
            axios.get(`http://localhost:5000/donation-center/getall`)
            .then((response)=>{
                getData(response.data.data)
            })
        
    },[])
    const handleReply = (id, values) => {
        axios.post(`http://localhost:5000/donation-request/${id}`,{
            name : values.fname,
            email : values.email,
            age : values.age
        })
        .then(()=>{
            handleClose();
        })
      };
    return(
        <Fragment>
            <Box className={classes.box1} pl={15}>
            <Grid container spacing={8}>
            <Grid item xs={6}>
                    <img src={DonationPic} width='60%' alt="About Us Pic"/>
                </Grid>
                <Grid item xs={6}>
                    <h1 className={classes.h1}>DONATE TO THE NEEDY</h1>
                    <p className={classes.p}> *Breast milk contains nutrients and antibodies that are essential for babies’ development, particularly for those born prematurely. When these babies cannot be breastfed by their mothers, pasteurised donor human milk from a milk bank is the next-best solution</p>
                    <p className={classes.p}> *If you want to donate milk, the bank will ask you to undergo screening for infections that may pass into your milk.</p>
                </Grid>
                
            </Grid>
            </Box>
            <Button onClick={handleClickOpen} color='primary' contained fullWidth className={classes.button}>Get Appointment For Screening </Button>
            <Box mt={2} mb={15} ml={4} mr={4}>
            <Grid container spacing={4}>
            {data.map((item) => (
            <Grid item xs={6}  key={item.id}>
              <DonCard {...item} />
            </Grid>
          ))}
            </Grid>
            </Box>
            <AppMod open={open} setOpen={setOpen} handleReply={handleReply}/>
        </Fragment>
    )    
};

export default Donation;