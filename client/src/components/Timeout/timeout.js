import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Timeout = () => {

    const state = useSelector(state => state.auth);
    const history = useHistory();
    
    const expiredTime = () => {
        const token = state.authData;
        if (token === "undefined" || token === null) return 0;
        const decrypt = jwt_decode(token);
        const currentTime = Math.floor(Date.now()/1000);
        const expTime = (decrypt.exp - currentTime) * 1000;
        if (expTime < 0) return 0;
        return expTime;
    }

    const redirect = () => {
        alert("You've been timed out due to inactivity.");
        history.push('/');
    }

    useEffect(
        () => {
            setTimeout(redirect, expiredTime());
        }
    )
    return null;
}

export default Timeout;