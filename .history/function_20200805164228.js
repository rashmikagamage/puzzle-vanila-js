function myFunction() {

    document.getElementById("imgContainer").style.gridTemplateColumns = "150px 150px 150p";

    for (let i = 0; i < 5; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}