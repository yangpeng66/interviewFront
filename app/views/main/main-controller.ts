/**
 * Created by yangpeng on 3/16/18.
 */

angular.module('smartorg.interviewChallenge.main', [
    'ngRoute'
]).controller('MainCtrl', [
    '$scope', '$location', 'callApiService', '$timeout', ($scope, $location, callApiService, $timeout) => {
        var getChallengeQuestion = function () {
            callApiService.getChallengeQuestion(function (response) {

                if (response.data.question) {
                    console.log("success", response);
                    $scope.challengeQuestion = response.data.question;
                    $scope.deadLine = response.data.deadLine;
                    $scope.submitHistory = response.data.submitHistory;
                    $scope.submitted = false;
                    $timeout();
                } else {
                    console.log("error:" + response.data.error )
                    alert(response.data.error)
                }
            }, function (response) {
                console.log("error", response);
                //alert(response);
            });
        }

        $scope.submitAnswer = function (answer: string) {
            callApiService.submitAnswer(answer, function (response) {

                if (response.data.success) {
                    console.log("success", response);
                    $scope.submitted = true;
                    $timeout(function () {
                        $location.path('/login')
                    }, 5000);
                }else{
                    alert(response.data.error);
                }

            }, function (response) {
                console.log("error", response);
            });
        }

        $timeout(getChallengeQuestion);
    }
]);