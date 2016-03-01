(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>ViewController', <%= classifiedControllerName %>ViewController);

  <%= classifiedControllerName %>ViewController.$inject = ['$scope'];

  function <%= classifiedControllerName %>ViewController($scope) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = {};
    init();

    function init() {
      // todo: add service code that gets this from the server
    }
  }
})();
