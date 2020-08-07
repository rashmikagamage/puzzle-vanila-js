function clipImage() {
    document.getElementById("myImg").style.clip = "rect(0px 75px 75px 0px)";
}

function clearClip() {
    for (let i = 0; i < 5; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./bell.png");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }

}