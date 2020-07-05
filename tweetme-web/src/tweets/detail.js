import React, {useState} from "react";
import {ActionBtn} from "./buttons";
import {UserDisplay, UserPicture} from "../profiles";

export function ParentTweet(props) {
	const {tweet} = props;
	return tweet.parent ? <Tweet isRetweet hideActions className={' '} tweet={tweet.parent} retweeter={props.retweeter}/> : null;
}

export function Tweet(props) {
    const {tweet, didRetweet, hideActions, isRetweet} = props;
    const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null);
    let className = props.className ? props.className : 'col-10 mx-auto col-md-6';
    className = isRetweet === true ? `${className} p-2 border rounded` : className;
    const path = window.location.pathname;
	const match = path.match(/(?<tweetid>\d+)/);
	const urlTweetId = match ? match.groups.tweetid : -1;


	const isDetail = `${tweet.id}` === `${urlTweetId}`;
    const handleLinkClick = (event) => {
    	event.preventDefault();
    	window.location.href = `/${tweet.id}`
    };

    const handlePerformAction = (newActionTweet, status) => {
    	if (status === 200) {
    	    setActionTweet(newActionTweet);
	    } else if (status === 201) {
			didRetweet(newActionTweet);
	    }
    };
    return <div className={className}>
	    {isRetweet && <div className={'mb-2'}>
		        <span className={'small text-muted'}>Retweet via <UserDisplay user={tweet.user} includeFullName={false} /> </span>
	        </div>
	    }
	    <div className={'d-flex col-8 col-offset-4'}>
		    <div className={''}>
			    <UserPicture user={tweet.user} />
		    </div>
		    <div className={'col-11'}>
			    <div>

				    <p>
					    <UserDisplay user={tweet.user} includeFullName={true} />
				    </p>
		            <p>{tweet.content}</p>
				     <ParentTweet tweet={tweet} retweeter={tweet.user}/>
			    </div>
			    <div className={'btn btn-group px-0'}>
				    {(actionTweet && !hideActions) && <React.Fragment>
		            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{type:"like", display:"Like"}}/>
		            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{type:"unlike", display:"Unlike"}}/>
		            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{type:"retweet", display:"Retweet"}}/>
				    </React.Fragment> }
				    {isDetail === true ? null : <button onClick={handleLinkClick} className={'btn btn-outline-primary btn-sm'}>View</button>}
		        </div>
		    </div>
	    </div>
    </div>
}