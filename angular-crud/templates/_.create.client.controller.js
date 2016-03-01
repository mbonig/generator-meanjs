(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>CreateController', <%= classifiedControllerName %>CreateController);

  <%= classifiedControllerName %>CreateController.$inject = ['$scope','$state', '<%= classifiedName %>'];

  function <%= classifiedControllerName %>CreateController($scope, $state, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = new <%= classifiedName %>();
    vm.save = save;

    init();

    function init() {
    }

    function save(){
      vm.<%= slugifiedModuleName %>.$save(function(updated){
        $state.go('<%= slugifiedModuleName %>.list');
      });
    }
  }
})();
