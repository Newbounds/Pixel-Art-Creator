var frame = document.getElementById("coordinates"),
    pixelCoordinates = { 'x' : 0, 'y' : 0 },
    isDrawing = false;
    isRemoving = false;

var addEventListener = function(elm, event, action ) {
    elm[event] = action;
}

addEventListener(controlPanel, "onmouseover", function(){ controlPanel.isMouseOver = true; });
addEventListener(controlPanel, "onmouseout", function(){ controlPanel.isMouseOver = false; });
addEventListener(window, "oncontextmenu", function(){ return false; })

addEventListener(frame, "onmousemove", function(){
    var currentPixelCoordinates = Pixel.track();
    if(currentPixelCoordinates.x !== pixelCoordinates.x || currentPixelCoordinates.y !== pixelCoordinates.y) {
        pixelCoordinates = currentPixelCoordinates;

        if(isDrawing) {
            Pixel.draw("pixel" + pixelCoordinates.x + pixelCoordinates.y, "pixel");
        } else if(isRemoving) {
            Pixel.remove();
        } else {
            Pixel.removeOutline();
            Pixel.draw("outlinePixel", "outlinePixel");
        }
    } else {
        return;
    }
});

addEventListener(frame, "onmousedown", function(){ 
    var mClick = event;
    switch(mClick.which) {
        case 1:
            isDrawing = true;
            Pixel.draw("pixel" + pixelCoordinates.x + pixelCoordinates.y, "pixel");
            break;
        case 2:
            console.log('scroll wheel');
            break;
        case 3:
            isRemoving = true;
            Pixel.removeOutline();
            Pixel.remove();
            break;
    } 
});

addEventListener(frame, "onmouseup", function(){ 
    isDrawing = false;
    isRemoving = false;
});