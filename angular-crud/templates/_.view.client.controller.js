(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>ViewController', <%= classifiedControllerName %>ViewController);

  <%= classifiedControllerName %>ViewController.$inject = ['$scope','$stateParams'];

  function <%= classifiedControllerName %>ViewController($scope, $stateParams) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = <%= classifiedName %>.get({<%= slugifiedName %>Id: $stateParams.<%= slugifiedName %>Id});
    init();

    function init() {

    }
  }
})();
