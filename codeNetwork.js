var codeNetwork = angular.module("codeNetwork", ['ngMaterial', 'ui.router']);

codeNetwork.config(function($locationProvider) {
    $locationProvider.hashPrefix('');
});