(function() {
  'use strict';

  function sample(){    
  }

  function dataService($http) {
    return {
      getMyInfo: function(name) {
        var clientID = "29e0d5557426019172f745f7595e59c0cf516265";
        var aboutmeUrl = 'http://api.about.me/api/v2/json/user/view/'+name+'?client_id='+clientID;
        return $http.get(aboutmeUrl);

      }     
    };
  }

  angular.module('services.data', [])
    .factory('DataService', dataService);
})();
