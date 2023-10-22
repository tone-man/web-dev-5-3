//How events are shown to the user

function printEvent(event) {
    const output = document.getElementById("trace");
    output.innerHTML += "Event Fired: " + event + "<br>";
}

function onLoad() {
    printEvent("onload");
}

function onClick() {
    printEvent("onclick");
}

function onScroll() {
    printEvent("onScroll");
}

function onBlur() {
    printEvent("onBlur");
}

function onDblClick() {
    printEvent("dblclick");
}

function onFocus() {
    printEvent("onFocus");
}

function onReset() {
    printEvent("onreset")
}