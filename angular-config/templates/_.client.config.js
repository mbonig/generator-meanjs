(function () {
    'use strict';

    // <%= humanizedModuleName %> module config
    angular.module('<%= slugifiedModuleName %>').run(Config);

    Config.$inject = ['Menus'];

    function Config(Menus) {
    }

})();
