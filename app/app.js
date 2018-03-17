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
    }]).factory('callApiService', function () {
    var emailAddress = "";
    return {
        login: function (email, successCallback, errorCallback) {
            emailAddress = email;
            successCallback({ email: email });
        },
        submitAnswer: function (answer, successCallback, errorCallback) {
            successCallback({ answer: answer });
        },
        getChallengeQuestion: function (successCallback, errorCallback) {
            successCallback({ challengeQuestion: "1+1" });
        }
    };
});
