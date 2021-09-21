/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", []);

myApp.controller("myController", function ($scope, customServices,$location,$anchorScroll) {
    $scope.result = function (input) {
        $scope.output = customServices.processString(input);
    }    
    $scope.lastName = "Dinesh";
    var a = {};
    a.Age = 28;
    a.Height = 164;
    $scope.details = a;
    var titles = [
        { value: "1", text: 'BCBA' },
        { value: "2", text: 'RBT' },
    ];
    $scope.titles = titles;
    var editTherapist = $scope.titles[1];
    $scope.editTherapist = editTherapist;

    var longTour = ["TamilNadu", "Karnataka", "Kerala"];
    var cities = {
        "TamilNadu": ["Ooty", "Kodaikanal", "Yerkadu", "Goa"],
        "Karnataka": ["Nandhi Hills", "XXX", "YYY"],
        "Kerala": ["Temples", "Kochin", "ABC"]
    }
    $scope.longTour = longTour;
    $scope.cities = cities;
    
    var languageInfo = [
        {"name":"C#","likes": 23,"dislikes": 4 },
        { "name": "C++", "likes": 18, "dislikes": 11 },
        { "name": "HTML", "likes": 23, "dislikes": 0 },
        { "name": "Javascript", "likes": 93, "dislikes": 2 },
    ]
    $scope.languageInfo = languageInfo;
    var incLanguageLikesCount = function (index) {
        console.log("MEGALA==>likes_Index : ", index);
        $scope.languageInfo[index].likes++;
    }
    var decLanguageDislikesCount = function (index) {
        console.log("MEGALA==>dislikes_Index : ", index);
        $scope.languageInfo[index].dislikes++;
    }
    $scope.incLanguageLikesCount = incLanguageLikesCount;
    $scope.decLanguageDislikesCount = decLanguageDislikesCount;
    $scope.rowLimit = 3;
    $scope.viewType = "List";
    $scope.importHtmlPage = "ListView.html";
    var employees = [
        { name: "Ben", gender: "Male", salary: 55000 },
        { name: "Sara", gender: "Female", salary: 68000 },
        { name: "Mark", gender: "Male", salary: 57000 },
        { name: "Pam", gender: "Female", salary: 53000 },
        { name: "Todd", gender: "Male", salary: 60000 }];
    $scope.employees = employees;
    
    $scope.updatePageview = function () {
        $scope.importHtmlPage = ($scope.viewType == "List") ? "ListView.html" : "TableView.html";
    }
    $scope.sortName = "name"; $scope.reverse = true;
    $scope.sortClick = function (data) {
        $scope.sortName = data;
        if (data == "name")
        {
            $scope.name = ($scope.name == "DESC") ? "ASCN" : "DESC";
            $scope.reverse = ($scope.name == "DESC") ? true : false;
         }
        if (data == "likes") { $scope.likes = ($scope.likes == "DESC") ? "ASCN" : "DESC"; $scope.reverse = ($scope.likes == "DESC") ? true : false; }
        if (data == "dislikes") { $scope.dislikes = ($scope.dislikes == "DESC") ? "ASCN" : "DESC"; $scope.reverse = ($scope.dislikes == "DESC") ? true : false;}
    }
    $scope.name = "DESC"; $scope.likes = "DESC";
    $scope.dislikes = "DESC";    
    $scope.myText = "Welcome to My World!!!"
    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        } else if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1 || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1) {
            return true;
        }
        return false;
    }
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    }
})