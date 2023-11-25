const bc = new BroadcastChannel("comms_channel")

bc.onmessage = (event) => {
    console.log("In client x, message received: ", event)
}

function sendMsg() {
    bc.postMessage("Message from client x");
    setTimeout(sendMsg, 2500);
}

