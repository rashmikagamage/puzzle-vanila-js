function myFunction() {

    document.getElementById("imgContainer").style.gridTemplateColumns = "auto auto auto";

    for (let i = 0; i < ; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}