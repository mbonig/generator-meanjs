(function () {
    'use strict';

    angular.module('<%= slugifiedModuleName %>').factory('<%= classifiedName %>',<%= classifiedName %>);

    <%= classifiedName %>.$inject = [];

    function <%= classifiedName %>() {
      // <%= humanizedName %> service logic
      // ...

      // Public API
      return {
        someMethod: function () {
          return true;
        }
      };
    }

})();
