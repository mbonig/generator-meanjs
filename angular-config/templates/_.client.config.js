(function () {
    'use strict';

    // <%= humanizedModuleName %> module config
    angular
        .module('<%= slugifiedModuleName %>')
        .run(menuConfig);

    menuConfig.$inject = ['Menus'];

    function menuConfig(Menus) {
        Menus.addMenuItem('topbar', {
            title: '<%= slugifiedModuleName %>',
            state: '<%= slugifiedModuleName %>.list',
            roles: ['*'],
            position: 0
        });
    }

})();
