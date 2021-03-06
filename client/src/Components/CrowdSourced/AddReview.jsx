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
        axios.post(`http://localhost:5000/add-review/${selectedLocationId}`,{
            name : values.name,
            email : values.email,
            rating: values.review,
            comment: values.comment
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
        <Modal open={isOpen}>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{
                name: '',
                email: '',
                comment: '',
                review: 2.5,
            }}
            >
                {
                ({values,submitForm, setFieldValue})=>(
                    <div className={styles.container}>
                        <IconButton onClick={handleClose} className={styles.IconButton}>
                            <CancelIcon />
                        </IconButton>
                        <Field name='name' as={TextField} placeholder='Name' fullWidth />
                        <Field name='email' as={TextField} placeholder='Email' fullWidth />
                        <Field name='comment' as={TextField} placeholder='Comment' fullWidth multiline
                        rows={4}/>
                        <div className={styles.rating}>
                            <Typography className={'margin10'} variant="body1" component="p">
                                Rating:
                            </Typography>
                            <RatingStars value={values.review} 
                                handleChange={(e)=>setFieldValue('review',parseFloat(e.target.value))} 
                            />
                        </div>
                        <Button className={styles.submit} variant="contained" color="primary"
                        onClick={submitForm}
                        >
                            Submit
                        </Button>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Your comment will be reflected only after email verification.
                        </Typography>

                    </div>
                )
                }
            </Formik>
        </Modal>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
         open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackBarClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleSnackBarClose} severity="success">
            Please check your mail for Verification.
            </MuiAlert>
        </Snackbar>
        </>
    );
}

export default AddReview;