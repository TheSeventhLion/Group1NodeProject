angular.module('groupApp').directive('groupDctv', function() {
  return {
    restrict: 'E',
    templateUrl: '',
    scope: {
      user: '=',
      deleteUser: '&'
    },
    link: function(scope, elem, att) {
      scope.profile = true;
    }
  };
});
