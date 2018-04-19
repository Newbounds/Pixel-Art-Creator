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

    var createNodeElement = function(elementType, elementId, elementClass){
        if(document.getElementById(elementId) && elementClass !== "outlinePixel") {
            return;
        } else {
            var newElement = document.createElement(elementType),
                settings = ControlPanel.settings();

            newElement.id = elementId;
            newElement.setAttribute("class", elementClass);

            elementSettings = ControlPanel.settings();

            addNodeSettings(newElement, elementSettings);
        }
    };

    var addNodeSettings = function(elm, settings) {
        for(setting in settings) {
            elm.style[setting] = settings[setting];
        }

        removeOutlinePixel();
        drawPixel(elm);
    }

    var removeOutlinePixel = function() {
        var outlinePixel = document.getElementById("outlinePixel");

        if(outlinePixel) {
            outlinePixel.remove();
        }
    }

    var drawPixel = function(elm) {
        var elmId = elm.id;
        
        frame.appendChild(elm)
    }

    return {
        xCoordinate: getXCoordinate,
        yCoordinate: getYCoordinate,
        create: createNodeElement
    };

})();