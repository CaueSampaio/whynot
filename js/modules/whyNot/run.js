whyNotApp.run(function ($rootScope) {
    $rootScope.user = {
        name: "",
        email: "",
        prof: "",
        picture: "",
        logged: false
    }

    console.log($rootScope.user)

})