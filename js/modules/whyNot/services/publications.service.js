whyNotApp.factory("pub", function ($http) {
    var _publicationsList = function () {
        return $http.get(baseUrl + "/publication/publications")
                    .then()
                    .catch(function(error) {
                        console.log(error)
                    });
    }

    var _publication = function (publication, response) {
        
        $http.post(baseUrl + "/publication", publication)
            .then(function () {
                response = "Publicação postada com sucesso!"
            }).catch(function () {
                response = "Erro na postagem da publicação!"
            })
    }

    var _comment = function (comment, response) {
        $http.post("", comment)
            .then()
            .catch(function () {
                var response = "Erro na postagem do comentário!"
            })
    }

    var _reaction = function (reaction, response) {
        $http.post("", reaction)
            .then()
            .catch(function () {
                response = "Erro ao adicionar reação!"
            }) 
    }

    var _search = function (search, response) {
        $http.post("", search)
            .then()
            .catch(function () {
                response = "Erro ao realizar pesquisa!"
            })
    }

    return {
        query: _publicationsList,
        postPub: _publication,
        postComment: _comment,
        postReaction: _reaction,
        postSeach: _search
    }

});