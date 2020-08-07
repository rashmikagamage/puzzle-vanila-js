function myFunction(num) {
    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + "150px "
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        //x.style.position = "absolute"
        x.style.width = '50px';
        x.style.height = '50px';
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}