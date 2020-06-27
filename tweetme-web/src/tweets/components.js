import React, {useEffect, useState} from 'react'
import {loadTweets, createTweet} from '../lookup';

export function TweetsComponent(props) {
	const textAreaRef = React.createRef();
	const [newTweet, setNewTweet] = useState([]);
	const handleSubmit = (event) => {
		event.preventDefault();
		const newValue = textAreaRef.current.value;
		let currentTweetList = [...newTweet];
		createTweet(newValue, (response, status) => {
			if (status === 201) {
				currentTweetList.unshift(response);
			} else {
				console.log(response);
			}
		});

		setNewTweet(currentTweetList);
		textAreaRef.current.value = '';
	};
	return <div className={props.className}><div className='col-md-12 mb-3'>
			<form onSubmit={handleSubmit}>
			<textarea ref={textAreaRef} required={true} className='form-control'>
			</textarea>
			<button type={"submit"} className='btn btn-primary my-3'>Tweet</button>
		</form>
		</div>
		<TweetsList newTweet={newTweet}/>
	</div>
}

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

	const newTweet = props.newTweet;
	console.log(newTweet);
    useEffect(() => {
    	if (tweetsDidSet === false) {
		    const myCallback = (response, status) => {
			    if (status === 200) {
				    setTweetsInit(response);
				    setTweetsDidSet(true);
			    }
		    };
		    loadTweets(myCallback);
	    }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet]);
    return tweets.map((item,index)=>{
                        return <Tweet tweet={item} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`}/>
                    });
}

export function Tweet(props) {
    const {tweet} = props;
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6';
    return <div className={className}>
        <p>{tweet.id} - {tweet.content}</p>
        <div>
            <ActionBtn tweet={tweet} action={{type:"like", display:"Like"}}/>
            <ActionBtn tweet={tweet} action={{type:"unlike", display:"Unlike"}}/>
            <ActionBtn tweet={tweet} action={{type:"retweet", display:"Retweet"}}/>
        </div>
    </div>
}

export function ActionBtn(props) {
    const {tweet, action} = props;
    const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
    const [userLike, setUserLike] = useState(tweet.userLike === true ? true : false);
    const className = props.className ? props.className : 'btn btn-primary btn-sm';
    const display = action.type === 'like' ? `${likes} ${action.display}` : `${action.display}`;
    const handleClick = () => {
    	if (action.type === 'like') {
    		if (userLike === true) {
    		    setLikes(likes - 1);
    		    setUserLike(false);
	        } else {
			    setLikes(likes + 1);
			    setUserLike(true);
		    }
	    }
    };
    return <button className={className} onClick={handleClick}> {display} </button>
}