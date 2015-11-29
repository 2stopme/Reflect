angular.module('starter.services', [])

    .factory('myService', function($http) {
        var baseURL = "http://46.101.10.46/reflect/index.php";

        var myService = {
            getAll: function(id) {
                var promise = $http.get(baseURL + '/getAll/' + id).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setWeather: function(myBoolsetWeather) {
                var promise = $http.get(baseURL + '/setWeather/' + myBoolsetWeather).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setTweetFeed: function(myBoolsetTweetFeed) {
                var promise = $http.get(baseURL + '/setTweetFeed/' + myBoolsetTweetFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setFacebookFeed: function(myBoolsetFacebookFeed) {
                var promise = $http.get(baseURL + '/setFacebookFeed/' + myBoolsetFacebookFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setTodoList: function(myBoolsetTodoList) {
                var promise = $http.get(baseURL + '/setTodoList/' + myBoolsetTodoList).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setClock: function(myBoolsetClock) {
                var promise = $http.get(baseURL + '/setClock/' + myBoolsetClock).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setSportFeed: function(myBoolsetSportFeed) {
                var promise = $http.get(baseURL + '/setSportFeed/' + myBoolsetSportFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setTechNewsFeed: function(myBoolsetTechNewsFeed) {
                var promise = $http.get(baseURL + '/setTechNewsFeed/' + myBoolsetTechNewsFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setEntertainmentFeed: function(myBoolsetEntertainmentFeed) {
                var promise = $http.get(baseURL + '/setEntertainmentFeed/' + myBoolsetEntertainmentFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            },

            setWhatsNewFeed: function(myBoolsetWhatsNewFeed) {
                var promise = $http.get(baseURL + '/setWhatsNewFeed/' + myBoolsetWhatsNewFeed).then(function (response) {
                    console.log(response);
                    return response.data;
                });
                return promise;
            }

        };
        return myService;
    });