function clipImage() {
    document.getElementById("myImg").style.clip = "rect(0px 75px 75px 0px)";
}

function clearClip() {
    console.log("aa")
    for (let i = 0; i < 9; i++) {


        let div = document.createElement("div");
        div.innerHTML = "<img src =./angle-brand-material-yellow-email.jpg" + "></img>"
        div.style.height = "200px";
        document.body.appendChild(div)

    }
}