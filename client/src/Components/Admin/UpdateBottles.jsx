import React,{useState, useEffect} from 'react';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';


const UpdateBottles = (props) => {
    const [bottleCount, setBottleCount]= useState(0);
    const [snackBar, setSnackBar]= useState(false);

    useEffect(()=>{
        setBottleCount(props.bottleCount)
    },[props.bottleCount])

    const handleChange= (e)=>{
        setBottleCount(e.target.value);
    }
    const handleSnackBarClose=()=>{
        setSnackBar(false)
    }

    const handleSubmit= ()=>{
        const _id= window.localStorage.getItem('user');
        axios.put('http://localhost:5000/donation-center/update-bottle-count',{
            bottle_count: bottleCount,
            center_id: _id,
        })
        .then(()=>{
            setSnackBar(true)
            props.setBottleCount(bottleCount)
        })
    }

    return (
        <>
        <Paper elevation={3} style={{padding: 10}} >
            <Typography variant='button'>
                Update Bottle Count
            </Typography>
            <TextField type='number' placeholder='Bottle Count'  name='bottle count' value={bottleCount} onChange={handleChange} />
            <Button variant='outlined' style={{marginTop: 10}} onClick={handleSubmit}>
                Submit
            </Button>
        </Paper>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
         open={snackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleSnackBarClose} severity="success">
            Bottle Count Updated
            </MuiAlert>
        </Snackbar>
        </>
    );
}

export default UpdateBottles;