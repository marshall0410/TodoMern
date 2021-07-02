import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container} from '@material-ui/core'
import Navbar from './components/Navbar';

import Home from './pages/home'
import Auth from './pages/auth'

export default () => {
    return(
        <BrowserRouter>                       
            <Container>
                <Navbar /> 
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Auth}/>
                </Switch> 
            </Container>                       
        </BrowserRouter>
    )
}