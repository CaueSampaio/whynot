whyNotApp.factory("tec", function ($http) {
    var _tecnologies = function (sort) {
        return $http.get("" + sort)
    }

    return {
        query: _tecnologies
    }
})