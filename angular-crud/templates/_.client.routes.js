(function () {
    'use strict';

    //Setting up route
    angular
        .module('<%= slugifiedModuleName %>')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // <%= humanizedModuleName %> state routing
        $stateProvider
            .state('<%= slugifiedName %>', {
                url: '/<%= slugifiedRoutePath %>',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('<%= slugifiedName %>.list', {
                url: '/',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedModuleName %>.list.client.view.html',
                controller: '<%= classifiedControllerName %>ListController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.edit', {
                url: '/edit/:<%= slugifiedModuleName %>Id',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedModuleName %>.edit.client.view.html',
                controller: '<%= classifiedControllerName %>EditController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.create', {
                url: '/create',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedModuleName %>.create.client.view.html',
                controller: '<%= classifiedControllerName %>CreateController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.view', {
                url: '/view/:<%= slugifiedModuleName %>Id',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedModuleName %>.view.client.view.html',
                controller: '<%= classifiedControllerName %>ViewController',
                controllerAs: 'vm'
            });
    }
})();
