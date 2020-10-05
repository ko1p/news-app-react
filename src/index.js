import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './vendor/index.css';
import './vendor/normalize.css';
import './vendor/fonts.css'
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
