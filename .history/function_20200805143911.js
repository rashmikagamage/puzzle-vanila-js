function clipImage() {
    document.getElementById("myImg").style.clip = "rect(0px 75px 75px 0px)";
}

function clearClip() {

    for (let i = 0; i < 9; i++) {
        console.log(i)
        var img = document.createElement("IMG");
        img.setAttribute("src", "./angle-brand-material-yellow-email.jpg")
        img.setAttribute("width", "304");
        img.setAttribute("height", "228");
        document.body.appendChild(img)

    }
}