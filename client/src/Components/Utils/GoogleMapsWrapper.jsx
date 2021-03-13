import React,{useEffect} from 'react';
import { useLoadScript } from "@react-google-maps/api"
import GOOGLE_API_KEY from './MAP_API_KEY'; 


const libraries = ["places"];

const GoogleMapsWrapper = ({setMapStatus}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries: libraries,
    });

    useEffect(()=>{
        console.log(isLoaded)
        setMapStatus(isLoaded)
    },[isLoaded])

    return (null);
}

export default GoogleMapsWrapper;