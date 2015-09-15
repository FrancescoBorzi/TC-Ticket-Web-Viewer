(function () {
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    $scope.serverName = app.serverName;

    var request = app.api + "search/tickets?closedBy=0";

    $http.get( request )
      .success(function(data, status, header, config) {

      $scope.ticketsCount = data.length;

      if ($scope.ticketsCount > 0) {
        $scope.tickets = data;
      }
    })
      .error(function(data, status, header, config) {
      console.log("Error while retrieving tickets.");
    });

  });

})()
