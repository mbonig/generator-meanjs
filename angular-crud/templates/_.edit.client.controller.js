(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>EditController', <%= classifiedControllerName %>EditController);

  <%= classifiedControllerName %>EditController.$inject = ['$scope','$state'];

  function <%= classifiedControllerName %>EditController($scope, $state) {
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
