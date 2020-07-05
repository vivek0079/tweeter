import React, {useEffect, useState} from "react";
import {apiTweetList} from "./lookup";
import {Tweet} from "./detail";

export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
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
			    	setNextUrl(response.next);
				    setTweetsInit(response.results);
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

    const handleLoadNext = (event) => {
    	event.preventDefault();
	    const handleLoadNextResponse = (response, status) => {
			if (status === 200) {
		        setNextUrl(response.next);
		        const newTweets = [...tweets].concat(response.results);
			    setTweetsInit(newTweets);
			    setTweets(newTweets);
		    } else {
				alert("There was an error!!!");
			}
	    };

	    if (nextUrl !== null) {
    		apiTweetList(props.username, handleLoadNextResponse, nextUrl);
	    }
    };

    return <React.Fragment>
	    {tweets.map((item,index)=>{
        return <Tweet tweet={item}
                      didRetweet={handleRetweet}
                      className='my-5 py-5 border bg-white text-dark'
                      key={`${index}-{item.id}`}/>
        })}
	    { nextUrl !== null && <button onClick={handleLoadNext} className={'btn btn-outline-primary btn-sm'}>Load Next</button>}
	    </React.Fragment>
}