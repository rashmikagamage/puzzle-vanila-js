function myFunction() {
    for (let i = 0; i < 5; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        document.getElementById("imgContainer").appendChild(x);
    }
}