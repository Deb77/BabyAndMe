import {useEffect} from 'react';
import { useLoadScript } from "@react-google-maps/api"
import GOOGLE_API_KEY from './MAP_KEY'; 


const libraries = ["places"];

const GoogleMapsWrapper = ({setMapStatus}) => {
    const { isLoaded } = useLoadScript({
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