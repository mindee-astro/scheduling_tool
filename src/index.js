import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootEl = document.getElementById('root');

let render = () => {
    const MainApp = require('./MainApp').default;
    ReactDOM.render(
        <MainApp/>,
        rootEl
    );
};

render();
