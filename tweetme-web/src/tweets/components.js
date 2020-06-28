import React, {useEffect, useState} from 'react'
import {apiTweetList, apiTweetCreate, apiTweetAction} from './lookup';

export function TweetsComponent(props) {
	const textAreaRef = React.createRef();
	const [newTweet, setNewTweet] = useState([]);
	const handleBackendUpdate = (response, status) => {
		let currentTweetList = [...newTweet];
			if (status === 201) {
				currentTweetList.unshift(response);
				setNewTweet(currentTweetList);
			} else {
				console.log(response);
			}
		};
	const handleSubmit = (event) => {
		event.preventDefault();
		const newValue = textAreaRef.current.value;
		apiTweetCreate(newValue, handleBackendUpdate);
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

    useEffect(() => {
    	if (tweetsDidSet === false) {
		    const handleTweetListLookup = (response, status) => {
			    if (status === 200) {
				    setTweetsInit(response);
				    setTweetsDidSet(true);
			    }
		    };
		    apiTweetList(handleTweetListLookup);
	    }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet]);
    return tweets.map((item,index)=>{
                        return <Tweet tweet={item} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`}/>
                    });
}

export function ParentTweet(props) {
	const {tweet} = props;
	return tweet.parent ? <div className='row'>
			    <div className='col-11 mx-auto p-3 border rounded'>
			    <p className='mb-0 text-muted small'>Retweeted</p>
			    <Tweet className={' '} tweet={tweet.parent} />
			    </div>
		    </div> : null;
}

export function Tweet(props) {
    const {tweet} = props;
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6';
    return <div className={className}>
	    <div>
        <p>{tweet.id} - {tweet.content}</p>
		     <ParentTweet tweet={tweet}/>
	    </div>
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
    const className = props.className ? props.className : 'btn btn-primary btn-sm';
    const display = action.type === 'like' ? `${likes} ${action.display}` : `${action.display}`;

    const handleActionBackendEvent = (response, status) => {
	    console.log(response, status);
	    if (status === 200) {
	    	setLikes(response.likes);
	    }
    };

    const handleClick = (event) => {
    	event.preventDefault();
	    console.log(tweet.id, action.type);
    	apiTweetAction(tweet.id, action.type, handleActionBackendEvent);
    };
    return <button className={className} onClick={handleClick}> {display} </button>
}