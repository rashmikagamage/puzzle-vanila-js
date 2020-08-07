function myFunction(num) {
    let grid = "";
    for (let i = 0; i < num; i++) {
        gird = grid + "150 px"
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}