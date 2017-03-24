angular.module('groupApp').controller('groupCtrl', function($scope, groupSrvc) {
  $scope.getUsers = function() {
    groupSrvc.getUsers().then(function(response) {
      $scope.users = response.data;
      console.log($scope.user);
    });
  };

});
