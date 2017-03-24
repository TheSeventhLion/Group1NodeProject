angular.module('groupApp').service('groupSrvc', function($http) {

  this.getUsers = function() {
    return $http( {
      method: 'GET',
      url: 'http://192.168.3.129:4000/api/data'
    });
  };

  this.deleteUser = function(id) {
    return $http( {
      method: 'REMOVE',
      url: 'http://192.168.3.129:4000/api/data/' + id
    });
  };

});
