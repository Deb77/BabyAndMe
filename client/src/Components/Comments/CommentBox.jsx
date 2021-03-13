import React from 'react';
import { Typography, Card, CardContent, Divider, styled } from '@material-ui/core';
import RatingStars from './RatingStars';
import UserAvatar from 'react-user-avatar';

const Header = styled(CardContent)({
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'space-between',
    '& .MuiRating-root':{
        marginLeft: '20px'
    }
})

const CommentBox = ({name, rating, comment}) => {
    return (
        <Card elevation={3}>
            <Header>
                <UserAvatar size="48" name={name} />
                <RatingStars value={rating} readOnly={true} />
            </Header>
            <CardContent>
                <Typography variant="body1" component="p">
                {comment}
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {
                    `By ${name}`
                }
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CommentBox;