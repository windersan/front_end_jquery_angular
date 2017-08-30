'use strict';
var currencyApp = angular.module('currencyApp', []);

currencyApp.controller('DateController', function ($scope, $http) {
    $scope.date = {year: '2017', month: '08', day: '28'};
    $http.get('http://api.fixer.io/' + $scope.date.year + '-' + $scope.date.month + '-' + $scope.date.day)
            .success(function (data) {
                $scope.rates = data.rates;
            });
    $scope.button = function () {
        $http.get('http://api.fixer.io/' + $scope.date.year + '-' + $scope.date.month + '-' + $scope.date.day)
                .success(function (data) {
                    $scope.rates = data.rates;
                });
    }
});