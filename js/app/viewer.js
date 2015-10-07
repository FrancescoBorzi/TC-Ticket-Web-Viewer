/*jslint browser: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    $scope.serverName = app.serverName;

    var request1 = app.api + "search/tickets?unresolved=1",
        request2 = app.api + "topgm/ticket/account",
        request3 = app.api + "topgm/ticket/character";

    $scope.apiLoaded = true;
    $scope.showTopGMbyAccount   = false;
    $scope.showTopGMbyCharacter = false;

    $http.get( request1 )
      .success(function(data, status, header, config) {

      $scope.ticketsCount = data.length;

      if ($scope.ticketsCount > 0) {
        $scope.tickets = data;
      }

      $http.get( request2 )
        .success(function(data, status, header, config) {
        $scope.topGMbyAccount = data;
        if (data.length > 0) { $scope.showTopGMbyAccount = true; }
      })
        .error(function(data, status, header, config) {
        console.log("Error while retrieving tickets, API request failed: " + request2);
      });

      $http.get( request3 )
        .success(function(data, status, header, config) {
        $scope.topGMbyCharacter = data;
        if (data.length > 0) { $scope.showTopGMbyCharacter = true; }
      })
        .error(function(data, status, header, config) {
        console.log("Error while retrieving tickets, API request failed: " + request3);
      });
    })
      .error(function(data, status, header, config) {
      $scope.apiLoaded = false;
      console.log("Error while retrieving tickets, API request failed: " + request1);
    });

  });

}());
