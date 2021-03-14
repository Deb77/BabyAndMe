//react
import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";


//Mui
 import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
 import Grid from '@material-ui/core/Grid';
 import Box from '@material-ui/core/Box';

//Custom Components
import AboutPic from '../../Images/About.png'
import Mission1Pic from '../../Images/Mission1.jpg'
import AwarenessPic from '../../Images/591.jpg'




  const useStyles = makeStyles((theme) => ({
    h1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '5rem',
        marginBottom: '1rem',
        color: '#fff'
    },
    p: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1rem',
        paddingLeft:'11rem',
        paddingRight:'10rem',
        //textAlign: 'center',
    },
    p1: {
        fontSize: '1rem',
        paddingLeft:'4rem',
        //paddingRight:'10rem',
        //textAlign: 'center',
    },
    p2: {
        fontSize: '1rem',
        paddingRight:'4rem',
        //paddingRight:'10rem',
        //textAlign: 'center',
    },
    box1:{
        overflowX: 'hidden',
        overflowY: 'hidden',
        backgroundColor: '#CBD5F0',
        //marginTop: '0.2rem',
    },
    box2:{
        overflowX: 'hidden',
        //backgroundColor: '#CBD5F0',
        //marginTop: '2rem',
    }
   }));
const About =() => {
    

    const classes = useStyles();
    
    return(
        
        <Fragment>
            <Box className={classes.box1} pl={15}>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <h1 className={classes.h1}>OUR MISSION</h1>
                    <p className={classes.p}> *To provide necessary infrastructure which are private, safe and clean, for mothers to breastfeed their infants in public buildings.</p>
                    <p className={classes.p}> *To increase awareness with regards to donation of breastmilk and it’s subsequent use as donated breast milk for little ones.</p>
                    <p className={classes.p}> *To aid in donation of breastmilk to Comprehensive Lactation Management Centres with the help of National Health Mission guidelines.  </p>
                </Grid>
                <Grid item xs={6}>
                    <img src={AboutPic} width='60%' alt="About Us Pic"/>
                </Grid>
            </Grid>
            </Box>
            <Box className={classes.box2} mt={10} ml={15} mr={15}>
                <Grid container>
                    <Grid item xs={4}>
                        <img src={Mission1Pic} width='100%' alt="About Us Pic"/>
                    </Grid>
                    <Grid item xs={8}>
                    <strong className={classes.p1}>Problem: </strong>
                    <p className={classes.p1}> Nearly one lakh children die every year in India due to diseases that could have been prevented through breastfeeding, according to a United Nations report.
                                                Breastfeeding not only helps prevent diarrhoea and pneumonia, two major causes of death in infants, it also helps reduce mothers’ risk of ovarian and breast cancer, two leading causes of death among women.

                                                    Even though the benefits of breastfeeding are well advertised through government programs, there is a lack of places where one can breastfeed their child in India.
<br></br> <a href='https://www.epw.in/engage/article/no-room-breastfeeding-mothers-india'>https://www.epw.in/engage/article/no-room-breastfeeding-mothers-india</a> 
<br></br>Around 81% mothers said that they were not comfortable feeding their children in public due to the lack of proper breastfeeding places.

Due to these limitations when a mother leaves her house with her child, she is likely to give the child “solution milk” ,and if she cannot after that, the child usually stays hungry till the mother reaches home.  
                    
                    </p>
                        
                    <strong className={classes.p1}>Solution: </strong>
                    <p className={classes.p1}>If we can solve the problem of working spaces by the concept of coworking areas why can't we solve the problem of women not having a place to breastfeed their babies by creating a network of safe crowdsourced breastfeeding spots.

Right Now, Women have fed their babies in their own car (90%), public transport (78%), restaurants (56%), car parking (49%), trial rooms (47%), washrooms (44%), religious places (41%), parks (32%) and only 6% use breastfeeding rooms (mainly due to unavailability). 
<br></br><a href='https://www.thehindu.com/sci-tech/health/only-6-mothers-in-india-are-okay-with-public-breastfeeding-places-says-survey/article29037650.ece'>https://www.thehindu.com/sci-tech/health/only-6-mothers-in-india-are-okay-with-public-breastfeeding-places-says-survey/article29037650.ece</a>
<br></br>
There are 500 mn active Internet users, 21% more women are online now -May 2020.
And 26 million new female Internet users were added in November 2019.
<br></br><a href='https://tech.hindustantimes.com/tech/news/india-now-over-500-mn-active-internet-users-21-more-women-are-online-now-iamai-story-zKfSAWrXyA2WvzyRJFEzDI.html'>https://tech.hindustantimes.com/tech/news/india-now-over-500-mn-active-internet-users-21-more-women-are-online-now-iamai-story-zKfSAWrXyA2WvzyRJFEzDI.html</a> 
<br></br>
We have created a crowdsourced platform which is targeted towards working India, where businesses, malls, shopping centres, cinema halls, bus terminals, railway and metro stations, airports and offices, can list clean hygienic rooms available with them as breastfeeding room, so that women can leave their house without worrying about where they can feed their baby.

Our platform is supported by a Peer-to-peer comment and review system, which helps users identify the authenticity or usability of a particular breastfeeding place.
</p>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2} mt={10} ml={15} mr={15}>
                <Grid container>
                    <Grid item xs={9}>
                    <strong className={classes.p2}>Problem: </strong>
                    <p className={classes.p2}> Women exploring the possibility of breast milk donation or use of donor breast milk, have questions in their minds with regards to the process of procurement and subsequent handling. Fears range from storage guidelines methods being lax and ambiguous, to distribution being beyond the milk’s true shelf life. Lack of awareness of donation of breast milk is rural & urban India is the main reason even after the first breast milk bank of Asia was set up in India (Mumbai) on November 27, 1989. Thirty years from then, the subject of breast milk donation and use of donor’s milk are still deemed as unknown and lesser understood practices.
                    <br></br><a href='https://indianexpress.com/article/parenting/blog/breast-milk-donation-myths-fears-and-who-can-donate-7103453/#:~:text=Having%20the%20highest%20number%20of,the%20rate%20of%20infant%20mortality.'>https://indianexpress.com/article/parenting/blog/breast-milk-donation-myths-fears-and-who-can-donate-7103453/#:~:text=Having%20the%20highest%20number%20of,the%20rate%20of%20infant%20mortality.</a>
                    </p>
                    <strong className={classes.p2}>Solution: </strong>
                    <p className={classes.p2}> The primary solution to this problem is ‘raising awareness’.
Raising awareness can be done in multiple forms. 
Hosting Educational Events- By letting women attend free educational meetups to teach them about breast milk donation and other related topics and getting them to clear their doubts and myths is the most effective solution. In recent days the growth of Women Empowerment Volunteers have been increasing, a proper management between the volunteers and the guideline committee can help to spread the awareness.
<br></br>Incorporating these topics in our day to day conversation can help in spreading of awareness too.

<br></br>Another primary method of raising awareness is to advertise on televisions,websites and other platforms.

</p>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={AwarenessPic} width='100%' alt="About Us Pic"/>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2} mt={10} ml={15} mr={15}>
                <Grid container>
                    <Grid item xs={2}>
                        <img src={Mission1Pic} width='100%' alt="About Us Pic"/>
                    </Grid>
                    <Grid item xs={10}>
                    <p className={classes.p1}> Women have fed their babies in their own car (90%), public transport (78%), restaurants (56%), car parking (49%), trial rooms (47%), washrooms (44%), religious places (41%), parks (32%) and breastfeeding rooms (6%). The most awkward places are a broom closet room in an airport, under a tree, the waiting room of the passport office, bank queues, washrooms, a bench in a mall, and a bus stop. Around 81% mothers are not comfortable feeding their children in public due to the lack of proper breastfeeding places. The greatest deterrents are hygiene (53%), and uncomfortable stares and lack of privacy (47%).  
                    <a href='https://www.thehindu.com/sci-tech/health/only-6-mothers-in-india-are-okay-with-public-breastfeeding-places-says-survey/article29037650.ece#:~:text=Breastfeeding%20in%20public%20is%20still,India%20survey%20by%20Momspresso.com.&text=Around%2081%25%20mothers%20are%20not,lack%20of%20proper%20breastfeeding%20places.'>Learn More</a>
                    </p>
                    <p className={classes.p1}> *To increase awareness with regards to donation of breastmilk and it’s subsequent use as donated breast milk for little ones.</p>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )    
};

export default About;