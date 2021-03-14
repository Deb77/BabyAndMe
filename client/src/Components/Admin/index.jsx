import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, makeStyles } from '@material-ui/core';
import Card from './Card';
import Table from './Table'
import {useHistory} from 'react-router-dom';

import UpdateBottles from './UpdateBottles';

const useStyles = makeStyles({
    container:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: 15,
        paddingBottom: 50,
        margin: 'auto',
    },
    div:{
        display: 'grid',
        gridTemplateColumns: '78% 20%',
        columnGap: '2%'
    }
})

const Admin = () => {
    const styles = useStyles();
    const [bottleCount, setBottleCount] = useState(0);
    const [pending, setPending] = useState(0);
    const [approved, setApproved] = useState(0);
    const [cardInfo, setCardInfo] = useState([]);
    const [approvalId, setApprovalId] = React.useState(null);

    const history= useHistory()

    useEffect(()=>{
        const _id= window.localStorage.getItem('user');
        if(typeof _id === 'undefined')
            history.push('/')
        else{
            if(approvalId===null){
                axios.get(`http://localhost:5000/donation-center/get-count/${_id}`)
                    .then((response) => {
                    console.log(response)
                    setBottleCount(response.data.data.bottle_count)
                    setPending(response.data.data.pending_requests)
                    setApproved(response.data.data.approved_requests)
                });
            }    
        }
    }, [approvalId])

    useEffect(() => {
        setCardInfo([
            { title: "Bottle Count", data: bottleCount },
            { title: "Pending Requests", data: pending },
            { title: "Completed Requests", data: approved } 
        ])
    }, [bottleCount, pending, approved])    

    return (
        <Container>
            <div className={styles.container}>
                {cardInfo.map(card => <Card title={card.title} data={card.data} />)}
            </div>
            <div className={styles.div}>
            <Table approvalId={approvalId} setApprovalId={setApprovalId} />
            <UpdateBottles setBottleCount={setBottleCount} bottleCount={bottleCount} />
            </div>
        </Container>
    )
}

export default Admin
