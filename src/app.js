 var app = angular.module('app', [       
      'services.data',           
    ]); 

app.controller('MainCtrl', ['$scope',"DataService", function($scope,service) {
  
  $scope.fetchAboutMeInfo = function() {
    var myDataPromise = service.getMyInfo($scope.aboutmeurl); 
    myDataPromise.then(
          function(payload) { 
              $scope.aboutMe = payload.data.bio;
              console.log(splitSentence($scope.aboutMe));
          },
          function(errorPayload) {
               console.log("Error");
          });
  }

/* This is for just showing the split function working with a remote string*/

  function splitSentence(sentence){
    var re = /\s* \s*/;
    wordsCollection = sentence.trim().split(re);
    console.log(wordsCollection)  
    return wordsCollection; 
}
 
}]);
