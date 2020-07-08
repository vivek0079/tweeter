import {backendLookup} from "../lookup";

export function apiProfileDetail(username, callback) {
	backendLookup('GET', `/profile/${username}/`, callback, null);
}

export function apiFollowToggle(username, action, callback) {
	const data = {action: `${action && action}`.toLowerCase()};
	backendLookup('POST', `/profile/${username}/follow`, callback, data);
}