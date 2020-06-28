import React, {useState} from 'react'
import {TweetsList} from "./list";
import {TweetCreate} from "./create";

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