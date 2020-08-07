function myFunction(num) {
    let grid = "";
    for (let i = 0; i < num; i++) {
        grid = grid + "50px "
    }

    document.getElementById("imgContainer").style.gridTemplateColumns = grid;

    for (let i = 0; i < num * num; i++) {
        var x = document.createElement("div");
        x.style.width = '30px';
        x.style.height = '30px';

        x.style.backgroundImage = "url('./chess.jpg')"
            //  x.setAttribute("src", "./chess.jpg");
            // x.style.position = "absolute"

        x.style.backgroundPosition = "10% 10%"
        x.style.clip = "rect(50px 25px 75px 5px)"
        x.id = "img" + i;
        document.getElementById("imgContainer").appendChild(x);
    }
}