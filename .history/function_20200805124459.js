function animateScript() {

    var newimage = new Image();
    newimage = document.getElementById('test')
    var height = newimage.height;
    var width = newimage.width;
    newimage.setAttribute('position', 'absolute');
    newimage.setAttribute('clip', 'rect(0px,60px,200px,0px);')

}