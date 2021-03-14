import React, {useState} from 'react';
import { Modal, TextField, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import { Formik, Field} from 'formik';
import RatingStars from '../Comments/RatingStars';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles= makeStyles({
    container: {
        width: '50%',
        //margin: 'auto',
        backgroundColor: '#fff',
        padding: 50,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: 10,
        display: 'grid',
        rowGap: '20px'
    },
    submit:{
        width: 120
    },
    rating:{
        display: 'flex',
        '& .margin10':{
            marginRight: 10
        }
    },
    IconButton:{
        position: 'absolute',
        right: 10,
        top: 10,
    }
});

const AddReview = ({isOpen,handleClose,selectedLocationId}) => {
    const [isSnackbarOpen,setIsSnackbarOpen]= useState(false);

    const handleSubmit= (values)=>{
        axios.put(`http://localhost:5000/donation-request/approve`,{
            message: values.message
        })
        .then(()=>{
            setIsSnackbarOpen(true);
            handleClose();
        })
    };

    
    const handleSnackBarClose= ()=>{
        setIsSnackbarOpen(false)
    }

    const styles= useStyles();
    return (
        <>
        <Modal open={true}>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{
                message: ''
            }}
            >
                {
                ({values,submitForm, setFieldValue})=>(
                    <div className={styles.container}>
                        <Typography variant="h5" component="p" align='center'>
                            Enter a Message to Be Sent
                        </Typography>
                        <IconButton onClick={handleClose} className={styles.IconButton}>
                            <CancelIcon />
                        </IconButton>
                        <Field name='message' as={TextField} placeholder='Message to be sent to Doner.
                        Mention Important details like date and time slot.' 
                        fullWidth multiline
                        rows={4}/>
                        <Button className={styles.submit} variant="contained" color="primary"
                        onClick={submitForm}
                        >
                            Submit
                        </Button>
                        <Typography variant="body2" color="textSecondary" component="p">
                            An Email will be sent to the Doner
                        </Typography>

                    </div>
                )
                }
            </Formik>
        </Modal>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
         open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackBarClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleSnackBarClose} severity="success">
                Email Sent Successfully
            </MuiAlert>
        </Snackbar>
        </>
    );
}

export default AddReview;