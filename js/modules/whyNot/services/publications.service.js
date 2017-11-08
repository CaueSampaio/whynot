whyNotApp.factory("pub", function ($http) {
    var _publicationsList = function () {
        return $http.get("");
    }

    var _publication = function (publication, response) {
        $http.post("", publication)
            .then(function () {
                response = "Publicação postada com sucesso!"
            }).catch(function () {
                response = "Erro na postagem da publicação!"
            })

        return response;
    }

    var _comment = function (comment, response) {
        $http.post("", comment)
            .then()
            .catch(function () {
                response = "Erro na postagem do comentário!"
            })

        return response;
    }

    var _reaction = function (reaction, response) {
        $http.post("", reaction)
            .then()
            .catch(function () {
                response = "Erro ao adicionar reação!"
            }) 
    }

    var _search = function (reaction, response) {
        $http.post("", reaction)
    }

    return {
        query: _publicationsList,
        postPub: _publication,
        postComment: _comment,
        postReaction: _reaction,
        postSeach: _search
    }

});