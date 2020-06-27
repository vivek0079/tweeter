function lookup(method, endpoint, callback, data) {
    let jsonData;
    if (data) {
        jsonData = JSON.stringify(data);
    }
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:8000/api${endpoint}`;
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        callback(xhr.response, xhr.status);
    };
    xhr.onerror = function(e) {
        console.log(e);
        callback({"content": "Request failed"}, 400)
    };
    xhr.send(jsonData);
}

export function createTweet(newTweet, callback) {
    lookup('POST', '/tweets/create/', callback, newTweet);
}

export function loadTweets(callback) {
    lookup('GET', '/tweets/', callback, null);
}