import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        backgroundColor:'#CBD5F0'
    },
});

export default function MediaCard({ title, data }) {
  const classes = useStyles();

    return (
      <Card className={classes.container}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
        </Typography>
        <Typography variant="h3" component="h2">
            {data}
        </Typography>
        </CardContent>
      </Card>
  );
}
