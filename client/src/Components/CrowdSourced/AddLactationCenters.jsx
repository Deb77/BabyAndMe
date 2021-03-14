import React, {useState} from 'react';
import { Modal, TextField, makeStyles, Button, Typography, IconButton } from '@material-ui/core';
import { Formik, Field} from 'formik';
import axios from 'axios';
import Map from '../Maps/Map';
import CancelIcon from '@material-ui/icons/Cancel';
import { Marker } from '@react-google-maps/api';
import { Skeleton } from '@material-ui/lab';
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
        display: 'flex',
        flexDirection: 'column',
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

const AddLactationCenters = ({isOpen,handleClose,isMapLoaded}) => {
    const [markerLoaction,setMarkerLocation]= useState(null)
    const [isSnackbarOpen,setIsSnackbarOpen]= useState(false);

    const handleSubmit= (values)=>{
        axios.post('http://localhost:5000/feeding-center-create',{
            name : values.name,
            email : values.email,
            lat : markerLoaction.lat,
            long : markerLoaction.lng,
            description: values.description
        })
        .then(()=>{
            setIsSnackbarOpen(true);
            handleClose();
        })

    };

    const getMarker= (e)=>{
        setMarkerLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        })
    }

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
                description: '',
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
                            <Field name='description' as={TextField} placeholder='Description' fullWidth multiline
                            rows={4}/>
            {
                isMapLoaded?
                <Map height={'300px'} handleClick={getMarker} >
                                {
                                    markerLoaction===null?<></>:
                                    <Marker 
                                    position={markerLoaction}/>
                                }
                            </Map>:
                <Skeleton variant="rect" width={'100%'} height={'300px'} />
            }
                            
                            <Button className={styles.submit} variant="contained" color="primary"
                            onClick={submitForm}
                            >
                                Submit
                            </Button>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your entry will be reflected only after email verification.
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

export default AddLactationCenters;