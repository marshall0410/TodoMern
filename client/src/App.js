import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Container} from '@material-ui/core'

import Alert from './components/Notification';

import Router from './components/Router'

const App = () => {
    return(
        <BrowserRouter>                                
            <Container>
                <Alert />   
                <Router />
            </Container>                       
        </BrowserRouter>
    )
}

export default App;