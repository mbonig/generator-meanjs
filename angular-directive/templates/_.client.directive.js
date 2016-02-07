(function () {
  'use strict';

  angular.module('<%= slugifiedModuleName %>').directive('<%= camelizedName %>', <%= camelizedName %>);

  <%= camelizedName %>.$inject = [];

    function <%= camelizedName %>() {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          // <%= humanizedName %> directive logic
          // ...

          element.text('this is the <%= camelizedName %> directive');
        }
      };
    }

})();
