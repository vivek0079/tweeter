(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),o=(n(15),n(7)),i=n.n(o),s=(n(16),n(2)),u=n(1);function m(e,t,n,a){var c;a&&(c=JSON.stringify(a));var l=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);l.responseType="json",l.open(e,r),l.setRequestHeader("Content-Type","application/json");var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");o&&(l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.setRequestHeader("X-CSRFToken",o)),l.onload=function(){403===l.status&&("Authentication details were not provided"===l.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login"));n(l.response,l.status)},l.onerror=function(e){console.log(e),n({message:"Request failed"},400)},l.send(c)}function d(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),m("GET",n,e,null)}function f(e,t,n){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://localhost:8000/api","")),m("GET",a,t,null)}var w=n(9);function b(e){var t=e.tweet,n=e.action,a=e.didPerformAction,l=t.likes?t.likes:0,r=e.className?e.className:"btn btn-primary btn-sm",o="like"===n.type?"".concat(l," ").concat(n.display):"".concat(n.display),i=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)};return c.a.createElement("button",{className:r,onClick:function(e){e.preventDefault(),console.log(t.id,n.type),function(e,t,n){m("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)}}," ",o," ")}function p(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){e.preventDefault(),window.location.href="/profile/".concat(t)}},e.children)}function E(e){var t=e.user,n=e.includeFullName,a=e.hideLink,l=!0===n?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,l,!0===a?"@".concat(t.username):c.a.createElement(p,{username:t.username},"@",t.username))}function v(e){var t=e.user;return e.hideLink?c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]):c.a.createElement(p,{username:t.username},c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}var h=n(8),g=n.n(h);function O(e){return c.a.createElement("span",{className:e.className},g()(e.children).format("0a"))}function j(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,l=t&&t.is_following?"Unfollow":"Follow";l=a?"Loading...":l;return t?c.a.createElement("div",null,c.a.createElement(v,{user:t,hideLink:!0}),c.a.createElement("p",null,c.a.createElement(E,{user:t,includeFullName:!0,hideLink:!0})),c.a.createElement("p",null,c.a.createElement(O,null,t.followers_count),1===t.followers_count?"follower":"followers"),c.a.createElement("p",null,c.a.createElement(O,null,t.following_count),"following"),c.a.createElement("p",null,t.location),c.a.createElement("p",null,t.bio),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(l)}},l)):null}function N(e){var t=e.username,n=Object(a.useState)(!1),l=Object(u.a)(n,2),r=l[0],o=l[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=Object(a.useState)(!1),b=Object(u.a)(w,2),p=b[0],E=b[1],v=function(e,t){200===t&&f(e)};return Object(a.useEffect)((function(){!1===r&&(!function(e,t){m("GET","/profile/".concat(e,"/"),t,null)}(t,v),o(!0))}),[t,r,o]),!1===r?"Loading...":d?c.a.createElement(j,{user:d,didFollowToggle:function(e){!function(e,t,n){var a={action:"".concat(t&&t).toLowerCase()};m("POST","/profile/".concat(e,"/follow"),n,a)}(t,e,(function(e,t){200===t&&f(e),E(!1)})),E(!0)},profileLoading:p}):null}function y(e){var t=e.tweet;return t.parent?c.a.createElement(k,{isRetweet:!0,hideActions:!0,className:" ",tweet:t.parent,retweeter:e.retweeter}):null}function k(e){var t=e.tweet,n=e.didRetweet,l=e.hideActions,r=e.isRetweet,o=Object(a.useState)(e.tweet?e.tweet:null),i=Object(u.a)(o,2),s=i[0],m=i[1],d=e.className?e.className:"col-10 mx-auto col-md-6";d=!0===r?"".concat(d," p-2 border rounded"):d;var f=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetid:1})),p=f?f.groups.tweetid:-1,h="".concat(t.id)==="".concat(p),g=function(e,t){200===t?m(e):201===t&&n(e)};return c.a.createElement("div",{className:d},r&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"Retweet via ",c.a.createElement(E,{user:t.user,includeFullName:!1})," ")),c.a.createElement("div",{className:"d-flex col-8 col-offset-4"},c.a.createElement("div",{className:""},c.a.createElement(v,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(E,{user:t.user,includeFullName:!0})),c.a.createElement("p",null,t.content),c.a.createElement(y,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},s&&!l&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{tweet:s,didPerformAction:g,action:{type:"like",display:"Like"}}),c.a.createElement(b,{tweet:s,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(b,{tweet:s,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})),!0===h?null:c.a.createElement("button",{onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},className:"btn btn-outline-primary btn-sm"},"View")))))}function T(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1],w=Object(a.useState)(null),b=Object(u.a)(w,2),p=b[0],E=b[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),g=h[0],O=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweet).concat(l);t.length!==m.length&&d(t)}),[e.newTweet,m.length,l]),Object(a.useEffect)((function(){if(!1===g){f(e.username,(function(e,t){200===t&&(E(e.next),r(e.results),O(!0))}))}}),[l,g,O,e.username]);var j=function(e){var t=Object(s.a)(l);t.unshift(e),r(t);var n=Object(s.a)(m);n.unshift(m),d(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(k,{tweet:e,didRetweet:j,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==p&&c.a.createElement("button",{onClick:function(t){t.preventDefault();null!==p&&f(e.username,(function(e,t){if(200===t){E(e.next);var n=Object(s.a)(m).concat(e.results);r(n),d(n)}else alert("There was an error!!!")}),p)},className:"btn btn-outline-primary btn-sm"},"Load Next"))}function S(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):console.log(e)};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/tweets/create/",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function x(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),m=i[0],f=i[1],w=Object(a.useState)(null),b=Object(u.a)(w,2),p=b[0],E=b[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),g=h[0],O=h[1];Object(a.useEffect)((function(){var t=Object(s.a)(e.newTweet).concat(l);t.length!==m.length&&f(t)}),[e.newTweet,m.length,l]),Object(a.useEffect)((function(){if(!1===g){d((function(e,t){200===t&&(E(e.next),r(e.results),O(!0))}))}}),[l,g,O,e.username]);var j=function(e){var t=Object(s.a)(l);t.unshift(e),r(t);var n=Object(s.a)(m);n.unshift(m),f(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(k,{tweet:e,didRetweet:j,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==p&&c.a.createElement("button",{onClick:function(e){e.preventDefault();null!==p&&d((function(e,t){if(200===t){E(e.next);var n=Object(s.a)(m).concat(e.results);r(n),f(n)}else alert("There was an error!!!")}),p)},className:"btn btn-outline-primary btn-sm"},"Load Next"))}function R(e){var t="false"!==e.canTweet,n=Object(a.useState)([]),l=Object(u.a)(n,2),r=l[0],o=l[1];return c.a.createElement("div",{className:e.className},t&&c.a.createElement(S,{didTweet:function(e){var t=Object(s.a)(r);t.unshift(e),o(t)},className:"col-md-12 mb-3"}),c.a.createElement(T,Object.assign({newTweet:r},e)))}function L(e){var t=e.tweetId,n=Object(a.useState)(!1),l=Object(u.a)(n,2),r=l[0],o=l[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),d=s[0],f=s[1],w=function(e,t){200===t&&f(e)};return Object(a.useEffect)((function(){!1===r&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t,null)}(t,w),o(!0))}),[t,r,o]),null===d?null:c.a.createElement(k,{tweet:d,className:e.className})}var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),c.a.createElement("div",null,c.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=document.getElementById("root");F&&r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),F);var q=c.a.createElement,C=document.getElementById("tweetme");C&&r.a.render(q(R,C.dataset),C);var D=document.getElementById("tweetme-feed");D&&r.a.render(q((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],r=n[1];return c.a.createElement("div",{className:e.className},c.a.createElement(S,{didTweet:function(e){console.log("newTweet",e);var t=Object(s.a)(l);t.unshift(e),r(t)},className:"col-md-12 mb-3"}),c.a.createElement(x,Object.assign({newTweet:l},e)))}),D.dataset),D),document.querySelectorAll(".tweetme-detail").forEach((function(e){r.a.render(q(L,e.dataset),e)})),document.querySelectorAll(".tweetme-profile-badge").forEach((function(e){r.a.render(q(N,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fbbddb1c.chunk.js.map