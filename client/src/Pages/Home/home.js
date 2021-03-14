//react
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


//Mui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

//Custom Components
import HeroPic from '../../Images/5276.jpg'
import InfantPic from '../../Images/infant.png'
import OrphanPic from '../../Images/orphan.png'
import LadyPic from '../../Images/lady.png'
import BreFeePic from '../../Images/brefee.png'
import DrinkingPic from '../../Images/babydrinking.png'
import BottlePic from '../../Images/bottle.png'




 const useStyles = makeStyles((theme) => ({
    // home :{
    //     background: 'linear-gradient(0deg, #FFFF 0%, #ffc3a0 100%)',
    // },
    root: {
        width: 400,
        marginRight: '8rem',
        marginLeft: '8rem',
      },
    media: {
        height: 250,
      },
      cardcolor:{
        backgroundColor: '#1a4e8e',
        color:'#ffffff',
        textDecoration: 'none',
        boxShadow: '10px 10px 5px grey',
      },
      cardcolorw:{
        backgroundColor: '#efb4bb',
      },
    whycard :{
        display: 'flex',
        
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:'2rem',
        paddingBottom: '2rem',
        textDecoration: 'none'
    },
    whatcard :{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:'2rem',
        paddingBottom: '2rem',
    },
    herocontainer :{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:'2rem'
    },
    heroright: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    herorighth1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '5rem',
        marginBottom: '1rem',
        marginTop: '-2rem',
    },
    herorightp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1.5rem',
        paddingLeft:'15rem',
        paddingRight:'15rem',
        textAlign: 'center',
    },
    heroleft: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft:'7rem',
        width: '40%',
    },
    heading1: {
        fontSize: '4rem',
        marginLeft: '47rem',
        marginRight: '30rem',
        marginTop: '5.3rem',
    },
    heading2: {
        fontSize: '4rem',
        marginLeft: '39rem',
        marginRight: '25rem',
        marginTop: '5rem',
    },
    button: {
        backgroundColor: '#cbd5ee',
        textDecoration:'none'
    },
    link: {
        textDecoration:'none',
    },
    linkw: {
        textDecoration:'none',
        color: '#FFF',
    },
    linkb: {
        textDecoration:'none',
        color: '#000',
    }
  }));
const Home =() => {
    

    const classes = useStyles();
    
    return(
        
        <Fragment>
            <div className={classes.herocontainer}>
                <div className={classes.heroleft}>
                    <img src={HeroPic} alt="Hero Pic Left"/>
                </div>
                <div className={classes.heroright}>
                    <h1 className={classes.herorighth1}>Welcome to Baby&Me!</h1>
                    <p className={classes.herorightp}>Baby&Me is an attempt to bring undiluted focus on promotion of breastfeeding and provision of counselling services for supporting breastfeeding through health systems.</p>
                    <Link to="/About" className={classes.link}>
                    <Button size="large" variant="contained" className={classes.button}>Learn More !</Button>
                    </Link>
                </div>
            </div>
            <div>
                <Typography className={classes.heading1}>Why Baby&Me ?</Typography>
            </div>
            <div className={classes.whycard}>
            <Card className={classes.root} raised={true}>
                <a href='https://www.thehindu.com/sci-tech/health/inadequate-breastfeeding-may-drain-indian-economy-of-usd-14bn-un-report/article19407309.ece#:~:text=The%20report%20says%20that%20despite,that%20could%20have%20been%20prevented' className={classes.linkw}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={InfantPic}
                    title="Mortality Rate"
                    />
                    <CardContent className={classes.cardcolor}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mortality Rate
                    </Typography>
                    <Typography variant="body2" component="p">
                    Nearly one lakh children die every year in India due to diseases that could have been prevented through breastfeeding, according to a United Nations report.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
            </Card>
            <Card className={classes.root} raised={true}>
                <a href="https://www.grazia.co.in/lifestyle/everything-you-need-to-know-about-breast-milk-donation-in-india-6349-1.html" className={classes.linkw}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={OrphanPic}
                    title="Orphans"
                    />
                    <CardContent className={classes.cardcolor}>
                    <Typography gutterBottom variant="h5" component="h2">
                        For Orphanages
                    </Typography>
                    <Typography variant="body2" component="p">
                    "Because they are immune compromised, the immune properties in the breast milk are absolutely vital for them," said Perry Reimers, who runs the orphanage.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
            </Card>
            <Card className={classes.root} raised={true}>
                <a href="https://www.epw.in/engage/article/no-room-breastfeeding-mothers-india" className={classes.linkw}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={LadyPic}
                    title="Breastfeeding Areas"
                    />
                    <CardContent className={classes.cardcolor}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Safe Breastfeeding Areas
                    </Typography>
                    <Typography variant="body2" component="p">
                    It is essential to provide necessary infrastructure which are private, safe and clean, for mothers to breastfeed their infants in public buildings.  
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </a>
            </Card>
            </div>
            <div>
                <Typography className={classes.heading2}>What does Baby&Me do ?</Typography>
            </div>
            <div className={classes.whatcard}>
            <Card className={classes.root} raised={true}>
            <Link to="/breastfeeding-center" className={classes.linkb}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={BreFeePic}
                    title="BF"
                    />
                    <CardContent className={classes.cardcolorw}>
                    <Typography gutterBottom variant="h5" component="h2" >
                        Find Nearest Breastfeeding Room
                    </Typography>
                    <Typography variant="body2" component="p">
                    Helps you find the nearest safe and private breastfeeding room.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            </Card>
            <Card className={classes.root} raised={true}>
            <Link to="/Donation" className={classes.linkb}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={DrinkingPic}
                    title="Donate"
                    />
                    <CardContent className={classes.cardcolorw}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Donate to Lactation Centre
                    </Typography>
                    <Typography variant="body2" component="p">
                    Provide donor milk to high risk newborns admitted in the neo-natal unit and to babies whose mother have lactation failure.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            </Card>
            <Card className={classes.root} raised={true}>
            <Link to="/Donation" className={classes.linkb}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={BottlePic}
                    title="Availability"
                    />
                    <CardContent className={classes.cardcolorw}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Availability of Donor Milk
                    </Typography>
                    <Typography variant="body2" component="p">
                    Easily check the availability of donor milk a centre has to provide for high risk newborns admitted in the neo-natal unit.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
            </div>
        </Fragment>
    )    
};

export default Home;