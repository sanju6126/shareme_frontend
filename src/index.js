import React from 'react';
import ReactDOM from "react-dom";   //this connects from the DOM of the Website
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById('root')

    
    
);