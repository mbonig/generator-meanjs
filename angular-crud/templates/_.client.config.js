(function () {
    'use strict';

    // <%= humanizedName %> module config
    angular
        .module('<%= slugifiedModuleName %>')
        .run(menuConfig);

    menuConfig.$inject = ['Menus'];

    function menuConfig(Menus) {
        Menus.addMenuItem('topbar', {
            title: '<%= pluralizedHumanizedName %>',
            state: '<%= slugifiedName %>.list',
            roles: ['*'],
            position: 0
        });
    }

})();
