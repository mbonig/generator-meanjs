(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>CreateController', <%= classifiedControllerName %>CreateController);

  <%= classifiedControllerName %>CreateController.$inject = ['$scope','$state'];

  function <%= classifiedControllerName %>CreateController($scope, $state) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = {};
    vm.save = save;

    init();

    function init() {
    }

    function save(){
      vm.<%= slugifiedModuleName %>.save(function(updated){
        $state.go('<%= slugifiedModuleName %>.list');
      });
    }
  }
})();
