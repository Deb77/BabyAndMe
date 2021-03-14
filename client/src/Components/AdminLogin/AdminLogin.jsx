import React from 'react';
import { useHistory } from "react-router-dom";
import { Modal, TextField, Button, makeStyles } from '@material-ui/core';
import { Formik, Field } from 'formik';

import LoginLogo from '../../Assets/icons8-embryo-80.png';
import axios from 'axios';

const useStyles= makeStyles({
    container: {
        width: 300,
        height: 400,
        //margin: 'auto',
        //background: 'rgb(239,183,186)',
        //background: 'linear-gradient(180deg, rgba(239,183,186,1) 0%, rgba(229,192,200,1) 48%)',
        //backgroundColor: '#fff',
        backgroundColor: '#EFB7BA',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowX: 'hidden',
        overflowY: 'visible'
        
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 40px 20px 40px',
        justifyContent: 'space-evenly'
    },
    TextField:{
        backgroundColor: '#fff',
        marginBottom: '20px',
        borderRadius: 4
    },
    logo:{
        //position: 'absolute',
        height: 100,
        width: 100,
        borderRadius: '50%',
        //top: -40,
        margin: ' 20px auto 0px auto',
    },
    buttonDiv:{
        boxSizing: 'border-box',
        zIndex: 999,
        width: '80%',
        marginLeft: '20%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        padding: '0 40px 20px 0',
        height: 80,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'relative',
        '&::before':{
            position: 'absolute',
            content: '""',
            height: 40,
            width: 40,
            top: -20,
            right: -20,
            backgroundColor: 'rgb(239,183,186)',
            zIndex: 999,
            clipPath: 'circle(50% at 0 0)',
        },
        '&::after':{
            position: 'absolute',
            content: '""',
            height: 40,
            width: 40,
            top: -20,
            right: -21,
            backgroundColor: '#fff',
            zIndex: 990,
        }
    },
    button:{
        width: '60%'
    }
});

const AdminLogin = ({ open, handleClose,setLogged }) => {
    let history = useHistory();

    const handleSubmit= (values)=>{
        axios.post('http://localhost:5000/donation-center/login',{
            email: values.email,
            password: values.password
        })
        .then((response)=>{
            localStorage.setItem("user", response.data.data._id);
            history.push("/admin")
            handleClose()
            setLogged(true)
        })
    };

    const styles= useStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Formik
            initialValues={{
                email:'',
                password: ''
            }}
            onSubmit={handleSubmit}
            >
                {
                ({submitForm})=>(
                    <div className={styles.container}>
                        <img src={LoginLogo} alt='baby-embryo' className={styles.logo} />
                    <div className={styles.textContainer}>
                        <Field className={styles.TextField} name='email' as={TextField} variant='outlined' label="Email"/>
                        <Field className={styles.TextField} name='password' as={TextField} variant='outlined' label="Password" />
                    </div>
                    <div className={styles.buttonDiv}>
                        <Button className={styles.button} variant='contained' color='primary' onClick={submitForm}>
                            Submit
                        </Button>
                    </div>
                    </div>
                )
                }
            </Formik>
        </Modal>
    );
}

export default AdminLogin;