whyNotApp.factory("user", function ($http) {
    var _user = function () {
        return $http.get("");
    }

    var _newUser = function (user, response) {
        $http.post("", user)
        .then()
        .catch(function () {
            response = "Erro na operação de cadastro!"
        })
    }
    return {
        query: _user,
        post: _newUser
    }
})