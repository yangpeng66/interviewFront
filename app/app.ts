/**
 * Created by yangpeng on 3/16/18.
 */

angular.module('smartorg.interviewChallenge', [
    'ngRoute'
]).config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider.when('/login', {
        controller: "loginCtrl",
        templateUrl: 'login.html'
    }).when('/main', {
        controller: "mainCtrl",
        templateUrl: 'main.html'
    }).otherwise({redirectTo: '/login'});
}]).factory('callApiService', () => {
    return {
        login: function (email: string) {

        },
        submit: function (email: string, answer: any) {

        }
    };
});