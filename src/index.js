import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './App';

const store = configureStore();

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
