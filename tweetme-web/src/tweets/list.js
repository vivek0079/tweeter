import React, {useEffect, useState} from "react";
import {apiTweetList} from "./lookup";
import {Tweet} from "./detail";

export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [tweetsDidSet, setTweetsDidSet] = useState(false);
    useEffect(() => {
    	let final = [...props.newTweet].concat(tweetsInit);
    	if (final.length !== tweets.length) {
    		setTweets(final);
	    }
    }, [props.newTweet, tweets.length, tweetsInit]);

    useEffect(() => {
    	if (tweetsDidSet === false) {
		    const handleTweetListLookup = (response, status) => {
			    if (status === 200) {
				    setTweetsInit(response);
				    setTweetsDidSet(true);
			    }
		    };
		    apiTweetList(props.username, handleTweetListLookup);
	    }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet, props.username]);

    const handleRetweet = (newTweet) => {
		const updateTweetsInit = [...tweetsInit];
		updateTweetsInit.unshift(newTweet);
		setTweetsInit(updateTweetsInit);
		const updateFinalTweets = [...tweets];
		updateFinalTweets.unshift(tweets);
		setTweets(updateFinalTweets);

    };

    return tweets.map((item,index)=>{
        return <Tweet tweet={item}
                      didRetweet={handleRetweet}
                      className='my-5 py-5 border bg-white text-dark'
                      key={`${index}-{item.id}`}/>
    });
}