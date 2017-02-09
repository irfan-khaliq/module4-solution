(function(){
  'use strict';

  angular.module('data')
  .controller('categoryDetailController',categoryDetailController);

  categoryDetailController.$inject = ['categoryDetail'];
  function categoryDetailController(categoryDetail)
  {
    var ctrl = this;
    ctrl.menu_item = categoryDetail.menu_items;
  }
})();
