import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles';
import {FeedComponent, TweetDetailComponent, TweetsComponent} from "./tweets";
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

const e = React.createElement;
const tweetmeEle = document.getElementById('tweetme');
if (tweetmeEle) {
    ReactDOM.render(
        e(TweetsComponent, tweetmeEle.dataset), tweetmeEle
    );
}

const tweetmeFeedEle = document.getElementById('tweetme-feed');
if (tweetmeFeedEle) {
	ReactDOM.render(
		e(FeedComponent, tweetmeFeedEle.dataset), tweetmeFeedEle
	);
}

const tweetDetailElements = document.querySelectorAll('.tweetme-detail');
tweetDetailElements.forEach(container => {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset), container
    );
});

const profileBadgeElements = document.querySelectorAll('.tweetme-profile-badge');
profileBadgeElements.forEach(container => {
	ReactDOM.render(
		e(ProfileBadgeComponent, container.dataset), container
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
