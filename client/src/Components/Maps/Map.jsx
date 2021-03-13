import React,{useState} from 'react';
import { GoogleMap } from "@react-google-maps/api";
import GetUserLocation from '../Utils/BrowserGeolocation';

const GOA_BOUNDS={
    north: 15.83,
    south: 14.92,
    west: 73.6,
    east: 74.36,
};

const Map = ({ handleClick ,height, children}) => {
    const [currentLocation, setCurrentLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });
    /*
    const handleClick= (e)=>{
        setLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()    
        })
    }*/

    return (
        <>
        <GetUserLocation setCurrentLocation={setCurrentLocation} />
        <GoogleMap
        onClick={handleClick}
        options={
            {
                restriction: {
                latLngBounds: GOA_BOUNDS,
                strictBounds: false,
                }
            }
        }
        zoom={1}
        mapContainerStyle={{height, width: '100%'}}
        center={currentLocation}>
            {children}
        </GoogleMap>
        </>
    );
}

export default Map;