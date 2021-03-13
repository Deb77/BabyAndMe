import React,{useState, useEffect} from 'react';
import CommentsWrapper from './CommentsWrapper';
import LocationDisplay from './LocationDisplay';
import axios from 'axios';
import {makeStyles} from '@material-ui/core';

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

    useEffect(()=>{
        axios.get('http://localhost:5000/get-all-centers')
        .then((data)=>console.log(data));
    },[])
    //const [comments,setComments] = useState([]);


    const handleLocationSelect= (id)=>{
        setSelectedLocationId(id)
    }
    console.log(x)
    const styles= useStyles();
    return (
        <div className={styles.container}>
            <CommentsWrapper selected={selectedLocationId} />
            <LocationDisplay isMapLoaded={isMapLoaded} handleLocationSelect={handleLocationSelect} />
        </div>
    );
}

export default CrowdSourced;