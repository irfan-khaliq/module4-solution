(function(){
  'use strict';

  var app = angular.module('MenuApp');
  app.config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig($stateProvider,$urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state(
      'home',{
        url:'/home',
        templateUrl:"home.html",

      }).state(
      'category',{
        url:'/category',
        templateUrl:"category.html",
        controller : 'categoryController as ctrl',
        resolve:{
          categoriesList:['MenuDataService',function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      }).state('categoryDetail',{
      url:'/categoryDetail/{shortName}',
      templateUrl:'categoryDetail.html',
      controller:'categoryDetailController as ctrl',
      resolve:{
        categoryDetail:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    })
  }
  
})();
