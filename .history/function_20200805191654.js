function myFunction(num) {
    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + "50px "
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("IMG");
        // x.setAttribute("src", "./angle-brand-material-yellow-email.jpg");
        //x.style.position = "absolute"
        x.style.width = '50px';
        x.style.height = '50px';
        x.innerHTML = "dsdsd"
        x.style.clip = "rect(0px 15px 25px 0px)"
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}

console.log()