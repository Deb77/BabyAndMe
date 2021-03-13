import React from 'react';
import CommentsWrapper from './CommentsWrapper';
import LocationDisplay from './LocationDisplay';

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    constiner:{
        width: '80%',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '40% 60%',
    }
})

const CrowdSourced = ({isMapLoaded}) => {
    const styles= useStyles();
    return (
        <div className={styles.container}>
            <CommentsWrapper />
            <LocationDisplay isMapLoaded={isMapLoaded} />
        </div>
    );
}

export default CrowdSourced;