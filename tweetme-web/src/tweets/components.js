import React, {useEffect, useState} from 'react'
import {TweetsList} from "./list";
import {TweetCreate} from "./create";
import {apiTweetDetail} from './lookup';
import {Tweet} from './detail'
import {TweetsFeedList} from './feed'

export function FeedComponent(props) {
	const canTweet = true; //props.canTweet === "false" ? false : true;
	const [newTweets, setNewTweets] = useState([]);

	function handleNewTweet(newTweet) {
		console.log('newTweet', newTweet);
		var currentTweetList = [...newTweets];
		currentTweetList.unshift(newTweet);
		setNewTweets(currentTweetList);
	}

	return <div className={props.className}>
		{canTweet && <TweetCreate didTweet={handleNewTweet} className='col-md-12 mb-3'/>}
		<TweetsFeedList newTweet={newTweets} {...props} />
	</div>
}


export function TweetsComponent(props) {
	const canTweet = props.canTweet !== "false";
	const [newTweets, setNewTweets] = useState([]);
	const handleNewTweet = (newTweet) => {
		let currentTweetList = [...newTweets];
		currentTweetList.unshift(newTweet);
		setNewTweets(currentTweetList);
		};
	return <div className={props.className}>
		{canTweet && <TweetCreate didTweet={handleNewTweet} className='col-md-12 mb-3' />}
		<TweetsList newTweet={newTweets} {...props}/>
	</div>
}

export function TweetDetailComponent(props) {
	const {tweetId} = props;
	const [didLookup, setDidLookup] = useState(false);
	const [tweet, setTweet] = useState(null);
	const handleBackendLookup = (response, status) => {
		if (status === 200) {
			setTweet(response);
		}
	};

	useEffect(() => {
		if (didLookup === false) {
			apiTweetDetail(tweetId, handleBackendLookup);
			setDidLookup(true);
		}
	}, [tweetId, didLookup, setDidLookup]);

	return tweet === null ? null : <Tweet tweet={tweet} className={props.className}/>
}