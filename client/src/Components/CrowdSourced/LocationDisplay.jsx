import React from 'react';
import Map from '../Maps/Map';
import { Marker } from "@react-google-maps/api";
import { Skeleton } from '@material-ui/lab';

const positions= [
    { lat: 15.257130 , lng: 74.029209 , id: Math.random() },
    { lat: 15.234505 , lng: 73.937597 , id: Math.random() },
    { lat: 15.237094 , lng: 73.964515 , id: Math.random() },
    { lat: 15.246263 , lng: 73.934777 , id: Math.random() },
    { lat: 15.283725 , lng: 73.972903 , id: Math.random() },
]

const LocationDisplay = ({isMapLoaded}) => {

    const onClick = ( marker, id )=> {
        console.log('marker: ', marker, 'id: ', id)
    }

    return (
        <div>
            {
                isMapLoaded?
                <Map height={'100vh'}>
                {
                    positions.map((value)=>(
                        <Marker
                            key={value.lat+value.lng}
                            onClick={(e)=>onClick(e,value.id)}
                            position={value}
                        />
                    ))
                }
                </Map>:
                <Skeleton variant="rect" width={'100%'} height={'100vh'} />
            }
        </div>
    );
}

export default LocationDisplay;