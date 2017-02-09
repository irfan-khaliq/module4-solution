(function(){
  'use strict'
  angular.module('data')
  .component('categories', {
    templateUrl: 'categorylist.html',
    bindings: {
      items: '<'
    }
  });

})();
