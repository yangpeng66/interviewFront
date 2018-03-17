/**
 * Created by yangpeng on 3/16/18.
 */
angular.module('smartorg.interviewChallenge.main', [
    'ngRoute'
]).controller('MainCtrl', [
    '$scope', '$location', 'callApiService', '$timeout', function ($scope, $location, callApiService, $timeout) {
        var getChallengeQuestion = function () {
            callApiService.getChallengeQuestion(function (response) {
                console.log("success", response);
                $scope.challengeQuestion = response.challengeQuestion;
            }, function (response) {
                console.log("error", response);
            });
        };
        $scope.submitAnswer = function () {
        };
        $timeout(getChallengeQuestion());
    }
]);
