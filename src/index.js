import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
registerServiceWorker();
