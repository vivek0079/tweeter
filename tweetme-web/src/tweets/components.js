import React, {useEffect, useState} from 'react'
import {TweetsList} from "./list";
import {TweetCreate} from "./create";
import {apiTweetDetail} from './lookup';
import {Tweet} from './detail'

export function TweetsComponent(props) {
	const {username} = props;
	const canTweet = props.canTweet !== "false";
	const [newTweet, setNewTweet] = useState([]);
	const handleNewTweet = (newTweet) => {
		let currentTweetList = [...newTweet];
		currentTweetList.unshift(newTweet);
		setNewTweet(currentTweetList);
		};
	return <div className={props.className}>
		{canTweet && <TweetCreate didTweet={handleNewTweet} className='col-md-12 mb-3' />}
		<TweetsList newTweet={newTweet} username={username}/>
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