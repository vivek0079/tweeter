import React from "react";

function UserLink(props) {
	const {username} = props;
	const handleUserLink = (event) => {
		event.preventDefault();
		window.location.href = `/profile/${username}`
	};
	return <span className={'pointer'} onClick={handleUserLink}>
		{props.children}
	</span>
}

export function UserDisplay(props) {
	const {user, includeFullName, hideLink} = props;
	const displayName = includeFullName === true ? `${user.first_name} ${user.last_name} ` : null;

	return <React.Fragment>
		{displayName}
		{hideLink === true ? `@${user.username}` : <UserLink username={user.username}>@{user.username}</UserLink>}
	</React.Fragment>
}

export function UserPicture(props) {
	const {user, hideLink} = props;

	return hideLink ? <span className={'mx-1 px-3 py-2 rounded-circle bg-dark text-white'}>
				    {user.username[0]}
			    </span> : <UserLink username={user.username}>
				<span className={'mx-1 px-3 py-2 rounded-circle bg-dark text-white'}>
				    {user.username[0]}
			    </span>
	</UserLink>
}
