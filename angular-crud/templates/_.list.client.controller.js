(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>ListController', <%= classifiedControllerName %>ListController);

  <%= classifiedControllerName %>ListController.$inject = ['$scope','<%= classifiedName %>'];

  function <%= classifiedControllerName %>ListController($scope, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedModuleName %>s = <%= classifiedName %>.query();

    init();

    function init() {
    }
  }
})();
