import React, {Component, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from "./privateroute";

import AuthPage from '../../pages/auth';
import HomePage from '../../pages/home';
import TestPage from '../../pages/test';


const Router = (props) => {
    return(
        <Switch>
            <Route exact path="/" component={AuthPage}/>
            <PrivateRoute exact path="/home" component={HomePage} />    
            <PrivateRoute exact path="/test" component={TestPage} />                    
        </Switch>
    )
    
    }

export default Router;