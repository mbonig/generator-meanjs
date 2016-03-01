(function() {
  'use strict';

  angular
    .module('<%= slugifiedModuleName %>')
    .controller('<%= classifiedName %>CreateController', <%= classifiedName %>CreateController);

  <%= classifiedName %>CreateController.$inject = ['$scope','$state', '<%= classifiedName %>'];

  function <%= classifiedName %>CreateController($scope, $state, <%= classifiedName %>) {
    var vm = this;
    vm.<%= slugifiedName %> = new <%= classifiedName %>();
    vm.save = save;

    init();

    function init() {
    }

    function save(){
      vm.<%= slugifiedName %>.$save(function(updated){
        $state.go('<%= slugifiedName %>.list');
      });
    }
  }
})();
