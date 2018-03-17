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
}]).factory('callApiService', () => {
    var emailAddress = "";
    return {
        login: function (email: string, successCallback, errorCallback) {
            emailAddress = email;
            successCallback({email: email});
        },
        submitAnswer: function (answer: any, successCallback, errorCallback) {
            successCallback({answer: answer});
        },
        getChallengeQuestion: function (successCallback, errorCallback) {
            successCallback({challengeQuestion: "1+1"})
        }
    };
});