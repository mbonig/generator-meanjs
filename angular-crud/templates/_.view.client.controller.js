(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedName %>ViewController', <%= classifiedName %>ViewController);

  <%= classifiedName %>ViewController.$inject = ['$scope','$stateParams'];

  function <%= classifiedName %>ViewController($scope, $stateParams) {
    var vm = this;
    vm.<%= slugifiedName %> = <%= classifiedName %>.get({<%= slugifiedName %>Id: $stateParams.<%= slugifiedName %>Id});
    init();

    function init() {

    }
  }
})();
