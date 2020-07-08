import React, {useEffect, useState} from "react";
import {apiFollowToggle, apiProfileDetail} from "./lookup";
import {UserDisplay, UserPicture} from "./components";

import numeral from 'numeral';

function DisplayCount(props) {
	return <span className={props.className}>{numeral(props.children).format("0a")}</span>
}

function ProfileBadge(props) {
	const {user, didFollowToggle, profileLoading} = props;
	let currentStatus = user && user.is_following ? "Unfollow" : "Follow";
	currentStatus = profileLoading ? "Loading..." : currentStatus;
	const handleFollowToggle = (event) => {
		event.preventDefault();
		if (didFollowToggle && !profileLoading) {
			didFollowToggle(currentStatus);
		}
	};
	return user ? <div>
		<UserPicture user={user} hideLink={true}/>
		<p><UserDisplay user={user} includeFullName={true} hideLink={true}/></p>
		<p><DisplayCount>{user.followers_count}</DisplayCount>{user.followers_count === 1 ? "follower" : "followers"}
		</p>
		<p><DisplayCount>{user.following_count}</DisplayCount>following</p>
		<p>{user.location}</p>
		<p>{user.bio}</p>
		<button className={'btn btn-primary'} onClick={handleFollowToggle}>{currentStatus}</button>
	</div> : null;
}

export function ProfileBadgeComponent(props) {
	const {username} = props;
	const [didLookup, setDidLookup] = useState(false);
	const [profile, setProfile] = useState(null);
	const [profileLoading, setProfileLoading] = useState(false);
	const handleBackendLookup = (response, status) => {
		if (status === 200) {
			setProfile(response);
		}
	};

	const handleNewFollow = (currentStatus) => {
		apiFollowToggle(username, currentStatus, (response, status) => {
			// console.log(response, status);
			if (status === 200) {
				setProfile(response);
			}
			setProfileLoading(false);
		});
		setProfileLoading(true);
	};

	useEffect(() => {
		if (didLookup === false) {
			apiProfileDetail(username, handleBackendLookup);
			setDidLookup(true);
		}
	}, [username, didLookup, setDidLookup]);
	return didLookup === false ? "Loading..." : profile ?
		<ProfileBadge user={profile} didFollowToggle={handleNewFollow} profileLoading={profileLoading}/> : null;
}