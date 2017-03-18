(function(){
  'use strict';

   angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope){
     $scope.launchItem ="";
     $scope.message ="";
     $scope.texBoxBorder="";
     $scope.aletText = "";

     //ng-click event
     $scope.checkLaunchItem = function() {

       if($scope.launchItem ===""){    //no need to use trim as angular do that for me
         $scope.message = "Please enter data first";
         $scope.texBoxBorder="redBorder"; //this is custom style define at html page
         $scope.aletText="alert-danger"; //this is a bootstrap class
       }
       else {

         //here i am neglecting empty entry
         var items = $scope.launchItem.split (',').filter(function(el) { return el.trim().length != 0});

          //i add this check if input is in invalid format and after remove empty entry length is 0
          if(items.length===0) {
            $scope.message = "Please enter valid input";
            $scope.texBoxBorder="redBorder";
            $scope.aletText="alert-danger";
          }
          else if(items.length<=3) {
            $scope.message = "Enjoy!";
            $scope.texBoxBorder="greenBorder";  //this is custom style define at html page
            $scope.aletText="alert-success";    //this is a bootstrap class
          }
          else {
            $scope.message = "Too much!";
            $scope.texBoxBorder="greenBorder";
            $scope.aletText="alert-success";
          }
       }
     };
   }
})();
