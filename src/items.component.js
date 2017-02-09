(function(){
  'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'categoryDetailList.html',
    bindings: {
      details: '<'
    }
  });
  
})();
