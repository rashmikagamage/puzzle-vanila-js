function animateScript() {

    var newimage = new Image();
    newimage.src = document.getElementById('test').src;
    var height = newimage.height;
    var width = newimage.width;
    newimage.style.height = '50px';
    newimage.style.width = '50px';

}