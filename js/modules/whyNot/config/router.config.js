codeNetwork.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: "templates/login.html"
    })
    .state('register', {
        url: '/register',
        templateUrl: "templates/register.html"
    })
    .state('home', {
        url: '/home',
        templateUrl: "templates/home.html"
    })
    .state('home.feed', {
        url: '/feed',
        templateUrl: "templates/feed.html"   
    })
    .state('home.profile', {
        url: '/profile',
        templateUrl: "templates/profile.html"
    })
    .state('home.edit', {
        url: '/editprofile',
        templateUrl: "templates/profile-edit.html"
    })
    .state('home.friends', {
        url: '/friends',
        templateUrl: "templates/friends.html"
    })
    .state('home.groups', {
        url: '/groups',
        templateUrl: "templates/groups.html"
    })
    .state('home.group', {
        url: '/group',
        templateUrl: "templates/group.html"
    })
})