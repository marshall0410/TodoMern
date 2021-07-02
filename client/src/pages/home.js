import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Todo from '../components/Todo/todo';
import Form from '../components/Form/Form'

import { Grid } from '@material-ui/core';

import { getTodo } from '../redux/actions/todo';

const Home = () => {
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTodo());
    }, [id, dispatch])

    return(        
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <Todo />
            </Grid>
            <Grid item sm={4} xs={12}>
                <Form/>
            </Grid>
        </Grid>
    )
}

export default Home;