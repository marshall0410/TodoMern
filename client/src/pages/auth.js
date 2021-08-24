import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Grid, TextField, Button, Typography} from '@material-ui/core';

import { signIn, newAccount } from '../redux/actions/auth';
import { SET_AUTH } from '../redux/actions/actiontypes/auth';
import authService from '../services/authentication';


const Auth = () => {
    const [formToggle, setFormToggle] = useState(false);
    const [signUp, setSignUp] = useState({email:'', username:'', password:''});
    const [login, setLogin] = useState({username:'', password:''});

    const dispatch = useDispatch();
    const history = useHistory();

    let styles = {
        text:'blue',
        email:'blue'
    }

    const handleTextInput = (e) => {
        if (formToggle) {
            setSignUp({...signUp, [e.target.id] : e.target.value});
        } else {
            setLogin({...login, [e.target.id] : e.target.value});
        }           
    }

    const handleSubmit = (e) => {
        if (formToggle) {
            dispatch(newAccount(signUp, history));
        } else {
            dispatch(signIn(login, history));            
        }        
    }

    useEffect(
        () => {
            if (authService.getAuth()) {
                const token = localStorage.getItem('token');
                dispatch({type: SET_AUTH, data: token});
                history.push('/home');
            }
        }
    )
    return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
    >

    <Grid item xs={3}>
    <Typography variant={'h3'} align={'center'}>{formToggle ? 'Sign Up' : 'Sign In'}</Typography>
    <br />
    <form>
        {formToggle ? 
            <>
                <TextField 
                    id="email" 
                    label="Email"
                    className={styles.text} 
                    value={signUp.email} 
                    onChange={(e) => handleTextInput(e)} 
                    variant="standard" />
                <TextField 
                    id="username" 
                    label="Username"
                    className={styles.text} 
                    value={signUp.username} 
                    onChange={(e) => handleTextInput(e)} 
                    variant="standard" />
                <TextField 
                    id="password" 
                    label="Password"
                    className={styles.text} 
                    type="password"
                    value={signUp.password} 
                    onChange={(e) => handleTextInput(e)} 
                    variant="standard" />
            </>
        :
            <>
            <TextField 
                id="username" 
                label="Username"
                className={styles.text} 
                value={login.usernameemail} 
                onChange={(e) => handleTextInput(e)} 
                variant="standard" />
            <TextField 
                id="password" 
                label="Password"
                className={styles.text}
                type='password' 
                value={login.task} 
                onChange={(e) => handleTextInput(e)} 
                variant="standard" />  
            </>      
        }
        <br />
        <Button 
            size="large" 
            variant="contained"                    
            color="primary" 
            onClick={(e) => handleSubmit(e)}
        >
            Submit
        </Button>
        </form>
        {formToggle? 
            <p>Already have an account? <Button onClick={() => setFormToggle(!formToggle)}>Sign in</Button></p> : 
            <p>Don't have an account? <Button onClick={() => setFormToggle(!formToggle)}>Sign up</Button></p>}
    </Grid>
</Grid>         
    )
}

export default Auth;
