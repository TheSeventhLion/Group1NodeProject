angular.module('groupApp').controller('groupCtrl', function($scope, groupSrvc) {

  $scope.users;

  $scope.getUsers = groupSrvc.getUsers().then(function(response) {
      $scope.users = response.data;
  });

  $scope.deleteUser = function(id) {
    groupSrvc.deleteUser(id).then(function(response) {

      $scope.users = response.data;
      console.log($scope.user);
    });
  };

});
