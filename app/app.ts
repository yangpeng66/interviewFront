/**
 * Created by yangpeng on 3/16/18.
 */

angular.module('smartorg.interviewChallenge', [
    'ngRoute',
    'smartorg.interviewChallenge.login',
    'smartorg.interviewChallenge.main'
]).config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider.when('/main', {
        templateUrl: '/interviewFront/app/views/main/main-template.html',
        controller: 'MainCtrl'
    }).otherwise({redirectTo: '/login'});
}]).factory('callApiService', ['$http',($http) => {
    var emailAddress = "";
    return {
        login: function (email: string, successCallback, errorCallback) {
            emailAddress = email;
            successCallback({email: email});
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:5000/login',
                data: {email: email}
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        },
        submitAnswer: function (answer: any, successCallback, errorCallback) {
            successCallback({answer: answer});
        },
        getChallengeQuestion: function (successCallback, errorCallback) {
            successCallback({challengeQuestion: "1+1"})
        }
    };
}]);