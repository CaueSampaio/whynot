var whyNotApp = angular.module("whyNotApp", ["ui.router", "ngMaterial"]);

whyNotApp.config(function($locationProvider) {
    $locationProvider.hashPrefix('');
});