import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback) {
    backendLookup('POST', '/tweets/create/', callback, {content: newTweet});
}

export function apiTweetAction(tweetId, action, callback) {
    backendLookup('POST', '/tweets/action/', callback, {id: tweetId, action: action});
}

export function apiTweetList(callback) {
    backendLookup('GET', '/tweets/', callback, null);
}