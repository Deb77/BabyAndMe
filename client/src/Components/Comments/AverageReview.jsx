import React from 'react';
import { styled, Divider, Typography } from '@material-ui/core';

import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@material-ui/lab/Rating';

const Div= styled('div')({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    '& .MuiRating-root':{
        fontSize: '3rem',
    },
    '& .MuiTypography-root':{
        width: 80
    },
    '& .margin20':{
        margin: '0 20px'
    }
})

const AverageReview = ({loading, rating}) => {
    return (
        <Div>
            <Typography variant="h2" component="h2">
                {loading ? <Skeleton /> : rating}
            </Typography>
            <Divider 
                className={'margin20'}
                orientation="vertical" 
                flexItem 
            />
            <Rating size={'large'} value={rating} defaultValue={0} precision={0.5} readOnly />
        </Div>
    );
}

export default AverageReview;