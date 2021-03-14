import React,{useState, useEffect} from 'react';
import CommentsWrapper from './CommentsWrapper';
import LocationDisplay from './LocationDisplay';
import AddLactationCenter from './AddLactationCenters';
import axios from 'axios';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    container:{
        width: '90%',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        margin: 'auto',
        marginBottom: '65px',
    },
    h1: {
        fontSize: '64px',
        color: '#fff'
    },
    box1:{
        boxSizing: 'border-box',
        width: '100%',
        padding: 40,
        textAlign: 'center',
        backgroundColor: '#E5C0C8',
        //marginBottom: 100
        //marginTop: '0.2rem',
    },
    h2: {
        fontSize: '28px',
        color: '#fff',
        margin: 0
    },
    box2:{
        position: 'fixed',
        boxSizing: 'border-box',
        width: '96%',
        left: '2%',
        right: '2%',
        bottom: '10px',
        //padding: 0,
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#EFB7BA',
        borderRadius: '12px',
        boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.2)',
        '&:hover':{
            cursor: 'pointer'
        }
    },
})

const CrowdSourced = ({isMapLoaded}) => {
    const [selectedLocationId,setSelectedLocationId] = useState(null);
    const [centerData,setCenterData] = useState([]);

    const [isAddLactionModalOpen,setIsAddLactionModalOpen] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:5000/get-all-centers')
        .then((response)=>setCenterData(response.data.data));
    },[])
    //const [comments,setComments] = useState([]);

    const handleToggleLactionModal= ()=>{
        setIsAddLactionModalOpen(!isAddLactionModalOpen);
    }   

    const handleLocationSelect= (id)=>{
        setSelectedLocationId(id)
    }
    //console.log(x)
    const styles= useStyles();
    return (
        <>
        <div className={styles.box1}>
            <h1 className={styles.h1}>
                Locate Breastfeeding Centers Near You
            </h1>
        </div>
        <div className={styles.container}>
            <AddLactationCenter handleClose={handleToggleLactionModal} isOpen={isAddLactionModalOpen} isMapLoaded={isMapLoaded}/>
            <CommentsWrapper selectedLocationId={selectedLocationId} />
            <LocationDisplay centerData={centerData} isMapLoaded={isMapLoaded} handleLocationSelect={handleLocationSelect} />
        </div>
        <div className={styles.box2} onClick={handleToggleLactionModal}>
            <p className={styles.h2}>
                Add Breastfeeding center
            </p>
        </div>
        </>
    );
}

export default CrowdSourced;