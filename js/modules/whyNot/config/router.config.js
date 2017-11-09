whyNotApp.config(function($stateProvider, $urlRouterProvider) {
   
    $urlRouterProvider.otherwise("/home/feed");
    
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
        templateUrl: "templates/feed.html",  
        controller: "feedCtrl"
    })
    .state('home.tenologies', {
        url: '/tecnologies',
        templateUrl: "templates/tecnologies.html"   
    })
    
})
    

// codeNetwork.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise("/home/feed");

    // $stateProvider
    // .state('login', {
    //     url: '/login',
    //     templateUrl: "templates/login.html"
    // })
    // .state('register', {
    //     url: '/register',
    //     templateUrl: "templates/register.html"
    // })
    // .state('home', {
    //     url: '/home',
    //     templateUrl: "templates/home.html"
    // })
    // .state('home.feed', {
    //     url: '/feed',
    //     templateUrl: "templates/feed.html"   
    // })
    // .state('home.tenologies', {
    //     url: '/tecnologies',
    //     templateUrl: "templates/tecnologies.html"   
    // })
// })

