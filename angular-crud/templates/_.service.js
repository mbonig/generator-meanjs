(function () {
    'use strict';

    angular
        .module('<%= slugifiedModuleName %>')
        .factory('<%= classifiedName %>', <%= classifiedName %>);

    <%= classifiedName %>.$inject = ['$resource'];
    function <%= classifiedName %>($resource){
        return $resource('api/<%= slugifiedName %>/:<%= slugifiedName %>Id', {
        <%= classifiedName %>Id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
})();
