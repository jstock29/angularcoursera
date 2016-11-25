(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckCtrl', LunchCheckCtrl);
LunchCheckCtrl.$inject = ['$scope', '$filter'];

function LunchCheckCtrl($scope, $filter) {
  $scope.lunch_list = "";
  $scope.lunch_array = [];
  $scope.result="";

  $scope.SplitList=function(string){
    var arr = string.split(',');
    arr = arr.filter(function(e){return e});
    console.log(arr);

    return arr
  };

  $scope.LunchLogic = function(string){ // This function will find and remove all empty array elements, including spaces. 
    var str = string.replace(/\s+/g, '');
    $scope.lunch_array=$scope.SplitList(str);
    if ($scope.lunch_array.length==0){
      $scope.result="Please enter data first!";
    } else if ($scope.lunch_array.length>3) {
      $scope.result="Too much!"
    } else {
      $scope.result="Enjoy"
    }
  };
};

})();
