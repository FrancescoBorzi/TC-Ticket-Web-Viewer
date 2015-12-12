/*jslint browser: true, white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    $scope.showRecents = false;
    $scope.showResolvedTicketsCount = app.showResolvedTicketsCount;
    $scope.serverName  = app.serverName;
    $scope.monthDiff   = 0;
    $scope.monthName   = "this month";

    var request1 = app.api + "search/tickets?unresolved=1",
        request2 = app.api + "topgm/ticket/account",
        request3 = app.api + "topgm/ticket/character",
        monthRequest = app.api + "topgm/ticket/account/month/",
        recents = app.api + "ticket/recent/" + app.showResolvedTicketsCount,
        getMonth;

    $scope.apiLoaded = true;
    $scope.showTopGMbyAccount   = false;
    $scope.showTopGMbyCharacter = false;

    getMonth = function() {
      $http.get( monthRequest + (-$scope.monthDiff) )
        .success(function(data, status, header, config) {
        $scope.month = data;
      })
        .error(function(data, status, header, config) {
        console.log("Error while retrieving tickets, API request failed: " + monthRequest + (-$scope.monthDiff));
      });
    };

    $scope.changeMonth = function(diff) {

      if (diff + $scope.monthDiff > 0) { return; }

      $scope.monthDiff += diff;
      getMonth();

      switch ( $scope.monthDiff ) {
        case 0:
          $scope.monthName  = "this month";
          break;
        case -1:
          $scope.monthName  = "last month";
          break;
        default:
          $scope.monthName  = -$scope.monthDiff + " months ago";
      }
    };

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

      getMonth();

      if (app.showResolvedTicketsCount > 0) {
        $http.get( recents )
          .success(function(data, status, header, config) {
          $scope.recents = data;
          if (data.length > 0) { $scope.showRecents = true; }
        })
          .error(function(data, status, header, config) {
          console.log("Error while retrieving tickets, API request failed: " + recents);
        });
      }
    })
      .error(function(data, status, header, config) {
      $scope.apiLoaded = false;
      console.log("Error while retrieving tickets, API request failed: " + request1);
    });


    // Toggle score divs
    $scope.toggleTopGMbyAccount   = true;
    $scope.toggleTopGMbyCharacter = true;
    $scope.toggleTopAccountMonth  = true;

  });

}());
