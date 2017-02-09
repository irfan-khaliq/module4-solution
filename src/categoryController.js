(function(){
  'use strict';
  
  angular.module('data')
  .controller('categoryController',categoryController);

  categoryController.$inject = ['categoriesList'];
  function categoryController(categoriesList)
  {
    var ctrl = this;
    ctrl.categories = categoriesList;
  }
})();
