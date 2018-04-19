var frame = document.getElementById("coordinates"),
    globalX = 0,
    globalY = 0,
    isMouseDown = false;

var addEventListener = function(elm, event, action ) {
    elm[event] = action;
}

var trackPixel = function() {
    var x = Pixel.xCoordinate(event, 50),
        y = Pixel.yCoordinate(event, 50);
    
    if(globalX === x && globalY === y && isMouseDown === false) {
        return;
    } else {
        globalX = x;
        globalY = y;
        isMouseDown ? Pixel.create("div", "pixel" + globalX + globalY, "pixel") : Pixel.create("div", "outlinePixel", "outlinePixel");
    }
}

addEventListener(controlPanel, "onmouseover", function(){ controlPanel.isMouseOver = true; });
addEventListener(controlPanel, "onmouseout", function(){ controlPanel.isMouseOver = false; });
addEventListener(frame, "onmousemove", function(){ trackPixel(); })
addEventListener(frame, "onmousedown", function(){ isMouseDown = true; trackPixel(); })
addEventListener(frame, "onmouseup", function(){ isMouseDown = false; });