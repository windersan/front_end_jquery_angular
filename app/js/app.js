'use strict';
var ratingApp = angular.module('ratingApp', ['ngRoute']);
var currencyApp = angular.module('currencyApp', ['ngRoute']);


var accountApp = angular.module('accountApp', ['ngRoute']);



var penguinApp = angular.module('penguinApp', []);
var itemApp = angular.module('itemApp', []);


ratingApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/reviews', {
                    templateUrl: 'partials/reviews-list.html',
                    controller: 'viewRatings'
                }).
                when('/reviews/:reviewID', {
                    templateUrl: 'partials/reviews-details.html',
                    controller: 'viewRatingDetails'
                }).
                otherwise({
                    redirectTo: '/reviews'
                });
    }]);

currencyApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/currencies', {
                    templateUrl: 'partials/currencies-list.html',
                    controller: 'viewCurrencies'
                }).
                when('/currencies/:currencyID', {
                    templateUrl: 'partials/currencies-details.html',
                    controller: 'viewCurrencyDetails'
                }).
                otherwise({
                    redirectTo: '/currencies'
                });
    }]);






ratingApp.controller('viewRatings', ['$scope', function ($scope) {
        $scope.changeLabel = function (labelText) {
            $scope.displayLabelText = labelText;
        };
        $scope.filterHistory = [];
        $scope.resetFilter = function () {
            $scope.filterHistory.push($scope.filterText);
            $scope.filterText = "Bob";
        };
        $scope.resetFilter();
        $scope.filterHistory = [];
        $scope.ratings = [{
                id: 1,
                userName: 'Bob', rating: 4,
                comments: 'Nice Product'
            },
            {
                id: 2,
                userName: 'John', rating: 1,
                comments: 'Needs work'
            }];
    }]);

ratingApp.controller('viewRatingDetails', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        var reviewID = $routeParams.reviewID;
        $scope.reviewID = reviewID;
    }]);


currencyApp.controller('viewCurrencies', ['$scope', function ($scope) {
        $scope.changeLabel = function (labelText) {
            $scope.displayLabelText = labelText;
        };
        $scope.filterHistory = [];
        $scope.resetFilter = function () {
            $scope.filterHistory.push($scope.filterText);
            $scope.filterText = "";
        };
        $scope.resetFilter();
        $scope.filterHistory = [];
        $scope.currencies = [{
                id: 1,
                amount: 500000,
                currency: "Dollars"
            },
            {
                id: 2,
                amount: 5300,
                currency: "Euros"
            },
            {
                id: 3,
                amount: 25000,
                currency: "Lei"
            }];
    }]);

currencyApp.controller('viewCurrencyDetails', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        var currencyID = $routeParams.currencyID;
        $scope.currencyID = currencyID;
    }]);







penguinApp.controller('penguinList', function ($scope, $http) {

    $http.get('http://localhost:8000/services/penguins.php')
            .success(function (response) {
                $scope.penguins = response.penguins;
            });

});

penguinApp.controller('penguin', function ($scope, $http) {

    $http.get('http://localhost:8000/services/penguins.php?id=2')
            .success(function (response) {
                $scope.sci = response.scientificName;
            });

});


itemApp.controller('itemList', function ($scope, $http) {

    $http.get('http://localhost:8000/services/items.php')
            .success(function (response) {
                $scope.items = response.items;
            });

});

itemApp.controller('item', function ($scope, $http) {

    $http.get('http://localhost:8000/services/items.php?id=1')
            .success(function (response) {
                $scope.itemName = response.itemName;
            });

});













accountApp.controller('viewAccount', ['$scope', function ($scope) {

        $scope.changeLabel = function (labelText) {
            $scope.displayLabelText = labelText;
        };

        $scope.currencies = [{
                amount: '500000',
                currency: 'Dollars'
            },
            {
                amount: '2500000',
                currency: 'Euros'
            }];

    }]);




