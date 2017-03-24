angular.module('groupApp').controller('groupCtrl', function($scope, groupSrvc) {

  $scope.test = 'test';

  $scope.users;

  $scope.getUsers = groupSrvc.getUsers().then(function(response) {
      console.log(response);
      $scope.users = response;
  });

  $scope.deleteUser = function(id) {
    groupSrvc.deleteUser(id).then(function(response) {
      $scope.users = response.data;
    });
  };

});
