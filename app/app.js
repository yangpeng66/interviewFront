/**
 * Created by yangpeng on 3/16/18.
 */
angular.module('smartorg.interviewChallenge', [
    'ngRoute',
    'smartorg.interviewChallenge.login',
    'smartorg.interviewChallenge.main'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: '/interviewFront/app/views/main/main-template.html',
            controller: 'MainCtrl'
        }).otherwise({ redirectTo: '/login' });
    }]).factory('callApiService', ['$http', function ($http) {
        var endPoint = "http://127.0.0.1:5000";
        var emailAddress = "";
        return {
            login: function (email, successCallback, errorCallback) {
                emailAddress = email;
                $http({
                    method: 'POST',
                    url: endPoint + '/login',
                    data: { email: email }
                }).then(successCallback, errorCallback);
            },
            submitAnswer: function (emailanswer, successCallback, errorCallback) {
                $http({
                    method: 'POST',
                    url: endPoint + '/submit-answer',
                    data: { email: emailAddress, answer: emailanswer }
                }).then(successCallback, errorCallback);
            },
            getChallengeQuestion: function (successCallback, errorCallback) {
                $http({
                    method: 'POST',
                    url: endPoint + '/get-challenge',
                    data: { email: emailAddress }
                }).then(successCallback, errorCallback);
            }
        };
    }]);
