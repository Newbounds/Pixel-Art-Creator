var Pixel = (function() {

    var getXCoordinate = function(event, pixelSize) {
        var x = event.clientX;
        while(x%pixelSize !== 0) {
            x--
        }
        return x;
    };
    
    var getYCoordinate = function(event, pixelSize) {
        var y = event.clientY;
        while(y%pixelSize !== 0) {
            y--;
        }
        return y;
    };

    var trackPixel = function() {
        var x = getXCoordinate(event, pixelSize),
            y = getYCoordinate(event, pixelSize);
        
        return { x, y };
    }

    var createNewPixel = function(elementId, elementClass){
        var element = document.createElement("div"),
            settings = ControlPanel.settings();

        element.id = elementId;
        element.setAttribute("class", elementClass);

        for(setting in settings) {
            element.style[setting] = settings[setting];
        }

        return element;
    };

    var removeOutlinePixel = function() {
        var outlinePixel = document.getElementById("outlinePixel");
        
        if(outlinePixel) {
            outlinePixel.remove();
        }
    }

    var removePixel = function() {
        var pixel = document.getElementById("pixel" + pixelCoordinates.x + pixelCoordinates.y);

        if(pixel) {
            pixel.remove();
        }
    }

    var drawPixel = function(elementId, elementClass) {
        if(document.querySelectorAll("#" + elementId).length > 0) {
            return;
        }  
        else {
            pixel = createNewPixel(elementId, elementClass);
            frame.appendChild(pixel);
        }
    }

    return {
        track: trackPixel,
        remove: removePixel,
        removeOutline: removeOutlinePixel,
        draw: drawPixel
    };

})();