const bc = new BroadcastChannel("comms_channel")

bc.onmessage = (event) => {
    console.log("In client y, message received: ", event)
}

function sendMsg() {
    bc.postMessage("Message from client y");
    setTimeout(sendMsg, 5000);
}

