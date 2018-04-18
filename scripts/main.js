// Initializing Variables
var frame = document.getElementById("coordinates"),
controlPanel = document.getElementById("controlPanel"),
pixelOutlineId = "pixelOutline",
pixelOutlineClass = "pixelOutline",
pixelClass = "pixel",
pixelBorderColor = "#444444",
pixelSizeInput = document.getElementById("pixelSize"),
pixelBGColorInput = document.getElementById("pixelColor"),
pixelBGColor = "transparent",
pixelBorderRadius = "0",
pixelBorderTop = "",
pixelBorderRight = "",
pixelBorderBottom = "",
pixelBorderLeft = "",
transparentPixelRadio = document.getElementById("transparentPixelOn"),
transformRotateDeg = "",
isMouseDown = false,
elmStyles = {};

// Updating variables created above.
controlPanel.isMouseOver = false;
controlPanel.onmouseover = function() {
    controlPanel.isMouseOver = true;
};
controlPanel.onmouseout = function() {
    controlPanel.isMouseOver = false;
};
pixelBGColorInput.disabled = true;

// Functions
var getXCoordinate = function() {
    var x = event.clientX;

    while(x%pixelSizeInput.value !== 0) {
        x--
    }

    return x;
}

var getYCoordinate = function() {
    var y = event.clientY;

    while(y%pixelSizeInput.value !== 0) {
        y--;
    }

    return y;
}

var drawSquare = function(x, y, elmClass, elmId, zIndex) {
    elmStyles.width = pixelSizeInput.value + "px";
    elmStyles.height = pixelSizeInput.value + "px";
    elmStyles.zIndex = zIndex || 100;
    elmStyles.left = x + "px";
    elmStyles.top = y + "px";
    elmStyles.backgroundColor = pixelBGColor;
    elmStyles.transform = transformRotateDeg;
    elmStyles.borderColor = pixelBorderColor;
    elmStyles.borderRadius = pixelBorderRadius;
    elmStyles.borderTop = pixelBorderTop;
    elmStyles.borderRight = pixelBorderRight;
    elmStyles.borderBottom = pixelBorderBottom;
    elmStyles.borderLeft = pixelBorderLeft;

    var newDiv = document.createElement("div");
    newDiv.id = elmId || "";
    newDiv.setAttribute("class", elmClass);

    // Add Styles
    for(style in elmStyles) {
        addElementStyle(newDiv, style, elmStyles[style]);
    }

    frame.appendChild(newDiv);
}

var addElementStyle = function(elm, styleName, styleValue) {
    elm.style[styleName] = styleValue;
    return;
}

var removeOutlineSquare = function() {
    var outlineBox = document.getElementById(pixelOutlineId);

    if(outlineBox) {
        outlineBox.remove();
    }

    return;
}

frame.onmousemove = function() {
    removeOutlineSquare();
    pixelBGColor = transparentPixelRadio.checked ? "transparent" : pixelBGColorInput.value;

    if (controlPanel.isMouseOver) {
        return;
    } else {
        var x = getXCoordinate(),
            y = getYCoordinate();

        isMouseDown ? drawSquare(x, y, pixelClass) : drawSquare(x, y, pixelOutlineClass, pixelOutlineId);   
    }
}

frame.onmousedown = function() {
    isMouseDown = true;
    pixelBGColor = transparentPixelRadio.checked ? "transparent" : pixelBGColorInput.value;

    if (controlPanel.isMouseOver) {
        return;
    } else {
        var x = getXCoordinate(),
            y = getYCoordinate();
    
        drawSquare(x, y, pixelClass);   
    }
    
};

frame.onmouseup = function() {
    isMouseDown = false;

}

transparentPixelRadio.onchange = function() {
    if(!transparentPixelRadio.checked) {
        pixelBGColorInput.disabled = false;
        pixelBGColor = pixelBGColorInput.value;
    } else {
        pixelBGColorInput.disabled = true;
    }
}

// Some fun auto generated functionality
// Uncomment each section, or both at the same time
// and watch the fun results!
// Used for testing... or tripping out...
var x, y, z, c, a, zi;

// #1 Draws a bunch of random squares.

// for(var i = 1; i <= 500; i++) {
//     var x = Math.floor(Math.random() * 1921),
//         y = Math.floor(Math.random() * 1081),
//         z = Math.floor(Math.random() * 100) + 20,
//         r = Math.floor(Math.random() * 255),
//         g = Math.floor(Math.random() * 255),
//         b = Math.floor(Math.random() * 255)
//         // c = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
//     pixelSizeInput.value = z-z%10;
//     pixelBorderColor = "#0600a5";
//     pixelBGColor = "rgba(" + r + ", " + g + ", " + b + ", .314)";
//     transformRotateDeg = "rotate(45deg)";
//     pixelBorderRadius = "0 1000% 1000% 1000%";
//     // pixelBGColor = c;
//     zi = Math.floor(Math.random() * 180) + 75;

//     drawSquare(x, y, pixelClass, "", zi);
// }

// #2 Fills out a full grid using random colors

// x = 0;
// y = 0;
// z = 50;

// while(y <= 1080) {
//     for(var i = 0; i <= 1920; i=i+50) {
//         var x = i;
//             c = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        
//         pixelSizeInput.value = z-z%10;
//         pixelBGColor = c;

//         drawSquare(x, y, pixelClass);
//     }
//     y = y + 50;
// }

// #3 Sprial squares to play with

//     x = 0;
//     y = 542;
//     z = 2;
//     a = 962;
//     zi = z;
//     rotateTimes = 1;
//     pixelBorderRadius = "3%";

//     for(var i = 0; i < 1920; i++) {        
//         if(i < 960) {
//             zi = z;
//             pixelSizeInput.value = z;
//             y=y-.5;
//             z=z+1
//             i%2 === 0 ? pixelBorderColor = "#0600a5" : pixelBorderColor = "#0e06f5";
//             i%100 === 0 ? pixelBGColor = "rgba(14,6,245,.314)" : pixelBGColor = "transparent";
//             // pixelBorderRadius = "12%";
//         } else {
//             zi = a;
//             pixelSizeInput.value = a;
//             y=y+.5;
//             a=a-1;
//             i%2 === 0 ? pixelBorderColor = "#f27d0c" : pixelBorderColor = "#800909";
//             // i === 960 ? pixelBGColor = "rgba(0,0,0,.314)" : pixelBGColor = "";
//             // i%100 === 0 ? pixelBGColor = "rgba(128,9,9,.6)" : pixelBGColor = "transparent";
//             // pixelBorderRadius = "12%";
//         }
    
//         rotateDegrees = rotateTimes;
//         transformRotateDeg = "rotate(" + rotateDegrees + "deg)";
//         pixelSizeInput.transform = transformRotateDeg;

//         x++;

//         if(rotateTimes < 90) {
//             pixelBorderTop = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderRight = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderBottom = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderLeft = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//         } 
//         else if(rotateTimes >= 90 && rotateTimes < 180) {
//             pixelBorderTop = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderRight = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderBottom = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderLeft = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//         } 
//         else if(rotateTimes >= 180 && rotateTimes < 270) {
//             pixelBorderTop = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderRight = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderBottom = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderLeft = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//         } 
//         else if(rotateTimes >= 270 && rotateTimes < 360) {
//             pixelBorderTop = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//             pixelBorderRight = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderBottom = i < 960 ? "1px solid rgba(14,6,245,.314)" : "";
//             pixelBorderLeft = i < 960 ? "" : "1px solid rgba(129,9,9,.314)";
//         }
    
//         rotateTimes === 360 ? rotateTimes = 1 : rotateTimes++;
//         drawSquare(x, y, pixelClass, "", zi);
//     }
//     pixelSizeInput.value = 50;