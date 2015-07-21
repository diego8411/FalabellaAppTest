'use strict';

/**
 * @ngdoc function
 * @name falabellaAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the falabellaAppApp
 */
angular.module('falabellaAppApp')
   .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://utilsfalabella.appspot.com/eventos/api/?id_evento=1432650270').
        success(function(data) {
            $scope.oferta = data;
        });
});



