(function () {
    'use strict';

//Setting up route
    angular.module('<%= slugifiedModuleName %>').config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        // <%= humanizedModuleName %> state routing
        $stateProvider
            .state('<%= slugifiedName %>', {
                url: '/<%= slugifiedRoutePath %>',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedViewName %>.client.view.html',
                controller: '<%= classifiedControllerName %>Controller',
                controllerAs: 'vm'
            });
    }
})();
