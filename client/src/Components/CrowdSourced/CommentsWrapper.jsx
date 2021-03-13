import React, {useState,useEffect} from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import {ReactComponent as NotSelectedPlaceholder} from '../../Assets/no-locations.svg';

import AverageReview from '../Comments/AverageReview';
import CommentBox from '../Comments/CommentBox';
import AddReview from './AddReview';
import axios from 'axios';



const useStyles = makeStyles({
    container:{
        boxSizing: 'border-box',
        padding: '20px 20px 20px 0',
        //backgroundColor: '#f1f1f1',
    },
    commentsContainer:{
        marginTop: 30,
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto',
        rowGap: '20px'
    },
    notSelectedsvg:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    addButton:{
        height: 50,
        width: 200,
        marginTop: 30
    }

});
/*
const comments=[
    {   
        name: 'Jake Pirelta',
        comment: 'This impressive paella is a perfect party dish and a fun meal to cook together with your',
        rating: (Math.random() * 6).toFixed(1),
    },
    {
        name: 'Amy Santiago',
        comment: 'guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        rating: (Math.random() * 6).toFixed(1),
    },
    {   
        name: 'Terry Crews',
        comment: 'lorem ipsum dalor lorem ipsum, guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        rating: (Math.random() * 6).toFixed(1),
    },
    {
        name: 'Gina Linetti',
        comment: 'guests. Add 1 cup of frozen peas along with the mussels, if you like., lorem ipsum dalor lorem ipsum',
        rating: (Math.random() * 6).toFixed(1),
    },
    {
        name: 'Amy Santiago',
        comment: 'guests. Add 1 cup of frozen peas along with the mussels, if you like. guests. Add 1 cup of frozen peas along with the mussels, if you like. lorem ipsum dalor lorem ipsum',
        rating: (Math.random() * 6).toFixed(1),
    },
]
*/
const CommentsWrapper = ({selectedLocationId}) => {
    const [isModalOpen, setIsModalOpen]= useState(false)
    const styles= useStyles();

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        if(selectedLocationId !== null){
            axios.get(`http://localhost:5000/get-center-reviews/${selectedLocationId}`)
            .then((response)=>console.log(response.data.data))
        }
    },[selectedLocationId])

    const handleToggleAddReview= ()=>{
        setIsModalOpen( !isModalOpen )
    }

    return (
        <>
        {
            selectedLocationId!==null?
            <>
            <AddReview isOpen={isModalOpen} handleClose={handleToggleAddReview} selectedLocationId={selectedLocationId} />
            {
                comments.length===0?
                <Button variant="contained" color="primary" className={styles.addButton} onClick={handleToggleAddReview}>
                        Add Review
                </Button>:
                <div className={styles.container}>
                    <AverageReview rating={3.8} loading={false} />
                    <div className={styles.commentsContainer}>
                    <Button variant="contained" color="primary" onClick={handleToggleAddReview}>
                        Add Review
                    </Button>
                        {
                            comments.map((value,id)=>( 
                                <CommentBox key={''+value.rating+id}
                                    name={value.name}
                                    comment={value.comment}
                                    rating={value.rating}
                                />
                            ))
                        }
                    </div>
                </div>
            }
            </>
            :
            <div className={styles.notSelectedsvg}>
                <Typography variant="body1" color="textSecondary" component="p" align='center'>
                    Find A Safe spot to Feed your Baby
                </Typography>
                <NotSelectedPlaceholder width={'95%'} height={'300px'}/>
            </div>
        }
        </>
    );
}

export default CommentsWrapper;     