(function () {
    'use strict';

    //Setting up route
    angular
        .module('<%= slugifiedModuleName %>')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // <%= humanizedName %> state routing
        $stateProvider
            .state('<%= slugifiedName %>', {
                url: '/<%= slugifiedRoutePath %>',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('<%= slugifiedName %>.list', {
                url: '/',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedName %>.list.client.view.html',
                controller: '<%= classifiedName %>ListController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.edit', {
                url: '/edit/:<%= slugifiedModuleName %>Id',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedName %>.edit.client.view.html',
                controller: '<%= classifiedName %>EditController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.create', {
                url: '/create',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedName %>.create.client.view.html',
                controller: '<%= classifiedName %>CreateController',
                controllerAs: 'vm'
            })
            .state('<%= slugifiedName %>.view', {
                url: '/view/:<%= slugifiedModuleName %>Id',
                templateUrl: 'modules/<%= slugifiedModuleName %>/client/views/<%= slugifiedName %>.view.client.view.html',
                controller: '<%= classifiedName %>ViewController',
                controllerAs: 'vm'
            });
    }
})();
