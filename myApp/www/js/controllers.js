angular.module('starter.controllers', [])

    .controller('settingCtrl', function($scope, myService) {

      $scope.prefList = [
        { id : 1, text: "Sport", checked: true },
        { id : 2, text: "Nouvelle technologies", checked: false },
        { id : 3, text: "Culture & Loisirs", checked: false }, //TODO : list des taches
        { id : 4, text: "Actualités", checked: false }, //TODO : Facebook Feed
      ];

      $scope.change = function (data) {
        console.log(data.id, data.checked);
        var myVal;
        if(data.checked == true)
          myVal = 1;
        else
          myVal = 0;


        switch(data.id) {
          case 1:
            myService.setSportFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 2:
            myService.setTechNewsFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 3:
            myService.setEntertainmentFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 4:
            myService.setWhatsNewFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
        }

      }


    })



    .controller('confCtrl', function($scope, myService) {

      $scope.change = function (data) {
        console.log(data.id, data.checked);
        var myVal;
        if(data.checked == true)
          myVal = 1;
        else
          myVal = 0;


        switch(data.id) {
          case 1:
            myService.setWeather(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 2:
            myService.setTweetFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 3:
            /* myService.setTweetFeed(myVal).then(function(resp) {
             console.log(resp)
             });
             */
            console.log('toDo');
            break;
          case 4:
            myService.setTodoList(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 5:
            myService.setFacebookFeed(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
          case 6:
            myService.setClock(myVal).then(function(resp) {
              console.log(resp)
            });
            break;
        }

      }

      $scope.settingsList = [
        { id : 1, text: "Metéo", checked: true },
        { id : 2, text: "Twitter Feed", checked: false },
        /* { id : 3, text: "Horaire de transport", checked: false },*/
        { id : 4, text: "ToDo list", checked: false }, //TODO : list des taches
        { id : 5, text: "Facebook Feed", checked: false }, //TODO : Facebook Feed
        { id : 6, text: "Horloge", checked: true },
      ];


    });

