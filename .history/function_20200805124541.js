function animateScript() {

    var newimage = new Image();
    newimage = document.getElementById('test')
    var height = newimage.height;
    var width = newimage.width;
    newimage.setAttribute('position', 'absolute');
    newimage.style.clip = "rect(0px 75px 75px 0px)";

}