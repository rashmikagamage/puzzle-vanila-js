function clipImage() {
    document.getElementById("myImg").style.clip = "rect(0px 75px 75px 0px)";
}

function clearClip() {

    for (let i = 0; i < 9; i++) {
        console.log(i)
        i = document.createElement("IMG");
        i.setAttribute("src", "./angle-brand-material-yellow-email.jpg")
        i.setAttribute("width", "304");
        i.setAttribute("height", "228");
        document.body.appendChild(i)
    }
}