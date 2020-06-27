import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TweetsComponent} from "./tweets";
import * as serviceWorker from './serviceWorker';

const rootEle = document.getElementById('root');
if (rootEle) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootEle
    );
}

const tweetmeEle = document.getElementById('tweetme');
if (tweetmeEle) {
    ReactDOM.render(
      <React.StrictMode>
        <TweetsComponent />
      </React.StrictMode>,
      tweetmeEle
    );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
