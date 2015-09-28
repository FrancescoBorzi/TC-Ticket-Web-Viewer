/*jslint browser: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    $scope.serverName = app.serverName;

    var request = app.api + "search/tickets?unresolved=1";

    $http.get( request )
      .success(function(data, status, header, config) {

      $scope.apiLoaded = true;
      $scope.ticketsCount = data.length;

      if ($scope.ticketsCount > 0) {
        $scope.tickets = data;
      }
    })
      .error(function(data, status, header, config) {
      $scope.apiLoaded = false;
      console.log("Error while retrieving tickets, API request failed: " + app.api + "search/tickets?unresolved=1");
    });

  });

}());
