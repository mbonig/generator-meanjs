(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedName %>EditController', <%= classifiedName %>EditController);

  <%= classifiedName %>EditController.$inject = ['$scope','$state','$stateParams', '<%= classifiedName %>'];

  function <%= classifiedName %>EditController($scope, $state, $stateParams, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedModuleName %> = <%= classifiedName %>.get({<%= slugifiedName %>Id: $stateParams.<%= slugifiedName %>Id});
    vm.save = save;

    init();

    function init() {

    }

    function save(){
      vm.<%= slugifiedName %>.update(function(updated){
        $state.go('<%= slugifiedName %>.list');
      });
    }
  }
})();
