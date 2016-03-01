(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>ListController', <%= classifiedControllerName %>ListController);

  <%= classifiedControllerName %>ListController.$inject = ['$scope'];

  function <%= classifiedControllerName %>ListController($scope) {
    var vm = this;
    vm.<%= slugifiedModuleName %>s = [];


    init();

    function init() {
    }
  }
})();
