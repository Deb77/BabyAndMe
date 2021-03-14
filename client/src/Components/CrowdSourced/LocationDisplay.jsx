import React, {useState} from 'react';
import Map from '../Maps/Map';
import { Marker, InfoWindow } from "@react-google-maps/api";
import { Skeleton } from '@material-ui/lab';
import { Typography, Divider, Button, makeStyles } from '@material-ui/core';

import DirectionsIcon from '@material-ui/icons/Directions';
import MarkerIcon from '../../Assets/icons8-breastfeeding-48.png';

const useStyles= makeStyles({
    divStyle: {
        background: `white`,
        //textAlign: 'center',
        padding: 15
    },
    heading:{
        textAlign: 'center',
    },
    anchor:{
        textDecoration: 'none'
    },
    button:{
        marginTop: 15,
        //textAlign: 'left'
    }
    
})


const height= '100vh';
const LocationDisplay = ({isMapLoaded,handleLocationSelect,centerData}) => {
    const [selectedMarker,setSelectedMarker]= useState(null);

    const onClick = ( marker, value )=> {
        setSelectedMarker(value)
        handleLocationSelect(value._id);
    }

    const styles= useStyles();
    return (
        <div>
            {
                isMapLoaded?
                <Map height={height}>
                <>
                {
                    selectedMarker!==null &&
                    <InfoWindow
                        onCloseClick={()=>setSelectedMarker(null)}
                        position={{
                            lat: selectedMarker.lat,
                            lng: selectedMarker.long
                        }}
                    >
                        <div className={styles.divStyle}>
                            <Typography variant="h6" gutterBottom className={styles.heading}>
                            {selectedMarker.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                            {selectedMarker.description}
                            </Typography>
                            <Divider />
                            <Button variant="outlined" color="primary" className={styles.button}>
                                <DirectionsIcon />
                                <a href={`https://www.google.com/maps?q=${selectedMarker.lat},${selectedMarker.long}`}
                                    target='_blank' rel='noopener noreferrer'
                                    className={styles.anchor}
                                >
                                    Directions
                                </a>
                            </Button>
                        </div>
                    </InfoWindow>
                }
                
                {
                    centerData.map((value)=>(
                        <Marker
                            icon={MarkerIcon}
                            key={value.lat+value.lng}
                            onClick={(e)=>onClick(e,value)}
                            position={{
                                lat: value.lat,
                                lng: value.long
                            }}
                        />
                    ))
                }
                </>
                </Map>:
                <Skeleton variant="rect" width={'100%'} height={height} />
            }
        </div>
    );
}

export default LocationDisplay;