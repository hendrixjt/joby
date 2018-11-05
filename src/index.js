import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './screens/Home';
import JobBoard from './screens/JobBoard';
        

const Index = ({ pathname }) => {
    switch (pathname) {
        case '/jobBoard':
            return <JobBoard />;
        default:
        return <Home />;
    }
};
let pathname = window.location.pathname;



ReactDOM.render(<App />, document.getElementById('root'));



