(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedName %>ListController', <%= classifiedName %>ListController);

  <%= classifiedName %>ListController.$inject = ['$scope','<%= classifiedName %>'];

  function <%= classifiedName %>ListController($scope, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedName %>s = <%= classifiedName %>.query();

    init();

    function init() {
    }
  }
})();
