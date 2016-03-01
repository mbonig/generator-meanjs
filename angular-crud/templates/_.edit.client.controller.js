(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedControllerName %>EditController', <%= classifiedControllerName %>EditController);

  <%= classifiedControllerName %>EditController.$inject = ['$scope','$state','$stateParams', '<%= classifiedName %>'];

  function <%= classifiedControllerName %>EditController($scope, $state, $stateParams, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = <%= classifiedName %>.get({<%= slugifiedName %>Id: $stateParams.<%= slugifiedName %>Id});
    vm.save = save;

    init();

    function init() {

    }

    function save(){
      vm.<%= slugifiedModuleName %>.update(function(updated){
        $state.go('<%= slugifiedModuleName %>.list');
      });
    }
  }
})();
