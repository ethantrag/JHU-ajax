(function () {
  'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/mod9/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/mod9/templates/main.categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('menuItem', {
      url: '/categories/menuItems/:shortName',
      templateUrl: 'src/mod9/templates/main.menuItems.template.html',
      controller: 'MenuItemsController as menuItems',
      resolve: {
        items: function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }
      }
    });

  }

})();
