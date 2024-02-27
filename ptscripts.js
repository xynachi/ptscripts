// Random int
function randint(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Change skin
function pony(n) {
	document.querySelector("#app-game > div.top-menu > swap-box > div > ui-button > button").click();
	document.querySelector(`#pony-item-${n} > a`).click();
}

// Change face
function face(n) {
	document.querySelector(`#action-bar > div > virtual-list > action-button:nth-child(${n}) > button`).click();
}

// Get all websockets on page
const originalSend = WebSocket.prototype.send;
window.sockets = [];
WebSocket.prototype.send = function(...args) {
	if (window.sockets.indexOf(this) === -1)
		window.sockets.push(this);
	return originalSend.call(this, ...args);
};

// Send encoded character to websocket
let utf8Encode = new TextEncoder();
utf8Encode.encode("*");
socket.send(m);

// Read websocket
WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
    apply(target, thisArg, argumentsList) {
 
    console.log(argumentsList)
    return Reflect.apply(target, thisArg, argumentsList)
 
    }
})

// String to array
console.log(new TextEncoder().encode("someString")

// Decode array
console.log(new TextDecoder().decode(new Uint8Array([0, 255])))

// Join for get token
function join() {
	const data = JSON.stringify({
	  "accountId": "",
	  "accountName": "",
	  "pony": "",
	  "serverId": "",
	  "url": "https://pony.town/character",
	  "flags": {
		"friendsCRC": 0
	  },
	  "hash1": 0,
	  "hash2": 0,
	  "hash3": "",
	  "hash4": 0,
	  "hash5": 0,
	  "hash6": 0,
	  "commandsHash": 0,
	  "definesMask": 0,
	  "zoomLevel": 0,
	  "canvasWidth": 0,
	  "canvasHeight": 0
	});

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
		console.log(this.responseText);
	  }
	});

	xhr.open("POST", "https://pony.town/api/game/join");
	xhr.setRequestHeader("cookie", "");
	xhr.setRequestHeader("authority", "pony.town");
	xhr.setRequestHeader("accept", "application/json, text/plain, */*");
	xhr.setRequestHeader("api-bid", "");
	xhr.setRequestHeader("api-version", "");
	xhr.setRequestHeader("user-agent", "");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
	xhr.setRequestHeader("dnt", "1");
	xhr.setRequestHeader("origin", "https://pony.town");
	xhr.setRequestHeader("sec-fetch-site", "same-origin");
	xhr.setRequestHeader("sec-fetch-mode", "cors");
	xhr.setRequestHeader("sec-fetch-dest", "empty");
	xhr.setRequestHeader("referer", "https://pony.town/character");

	xhr.send(data);
}
