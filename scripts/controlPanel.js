var ControlPanel = (function() {

    var getSettings = function() {
        var settings = {
                'height' : document.getElementById("pixelSize").value + "px",
                'width' : document.getElementById("pixelSize").value + "px",
                'top' : pixelCoordinates.y + "px",
                'left' : pixelCoordinates.x + "px",
                'backgroundColor' : document.getElementById("pixelColor").value
            };

            settings.backgroundColor = document.getElementById("transparentPixelCheckbox").checked === true ? 'transparent' : settings.backgroundColor;

        return settings;
    }

    return {
        settings: getSettings
    };

})();