/// <reference path="script.js" />
myApp.factory("customServices", function () {
    return {
        processString : function (inpStr) {
            if (inpStr === undefined) {
                alert("Enter String");
            }
            var output = "";
            for (var i = 0; i < inpStr.length; i++) {
                if (inpStr[i] == inpStr[i].toUpperCase()) {
                    output += " ";
                }
                output += inpStr[i];
            }
            output = output.trim();
            return output
        }
    }
})