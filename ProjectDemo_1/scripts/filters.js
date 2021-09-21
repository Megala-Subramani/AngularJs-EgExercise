/// <reference path="script.js" />

myApp.filter("genFilter", function () {
    return function (gender) {
        switch (gender) {
            case "Male":
                return "1";
            case "Female":
                return "2";
            default:
                return "NA";
        }
    }
});