(function(){
  'use strict';

  var app=angular.module('data');

  app.service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http']
  function MenuDataService($http)
  {
    var service = {};
    var promise;
    service.getAllCategories= function()
    {
      promise=$http.get('https://davids-restaurant.herokuapp.com/categories.json')
      .then(function(response){
        return response.data;
      });
      return promise;
    }
    service.getItemsForCategory = function(categoryShortName)
    {
      promise=$http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
      .then(function(response){
        return response.data;
      });
      return promise;
    }
    return service;
  }
  
})();
