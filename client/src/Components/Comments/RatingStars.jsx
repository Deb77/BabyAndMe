import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';

const RatingStars = ({value, readOnly, handleChange}) => {
    return (
        <>
        {
            readOnly?
            <Tooltip title={`${value}`}>
                <Rating value={value} defaultValue={0} precision={0.5} readOnly />
            </Tooltip>:
            <Rating value={value} defaultValue={2.5} precision={0.5} onChange={handleChange} />
        }
        </>
    );
}

export default RatingStars;