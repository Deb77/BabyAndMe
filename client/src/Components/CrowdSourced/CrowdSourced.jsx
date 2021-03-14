import React,{useState, useEffect} from 'react';
import CommentsWrapper from './CommentsWrapper';
import LocationDisplay from './LocationDisplay';
import AddLactationCenter from './AddLactationCenters';
import axios from 'axios';
import {makeStyles, Button} from '@material-ui/core';

const x = process.env;

const useStyles = makeStyles({
    container:{
        width: '90%',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        margin: 'auto',
    }
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
        <Button variant="contained" color='primary' onClick={handleToggleLactionModal}>
            Add Lactation Centers
        </Button>
        <div className={styles.container}>
            <AddLactationCenter handleClose={handleToggleLactionModal} isOpen={isAddLactionModalOpen} isMapLoaded={isMapLoaded}/>
            <CommentsWrapper selectedLocationId={selectedLocationId} />
            <LocationDisplay centerData={centerData} isMapLoaded={isMapLoaded} handleLocationSelect={handleLocationSelect} />
        </div>
        </>
    );
}

export default CrowdSourced;