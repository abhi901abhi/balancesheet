import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

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
