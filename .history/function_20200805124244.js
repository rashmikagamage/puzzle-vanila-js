function animateScript() {

    var newimage = new Image();
    newimage.src = document.getElementById('test').src;
    var height = newimage.height;
    var width = newimage.width;
    newimage.style.height = '200px';
    newimage.style.width = '200px';
    newimage.height = '200px';
    newimage.width = '200px';
}