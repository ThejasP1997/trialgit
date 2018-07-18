var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
  $scope.title="Our Services";

  $scope.datas=[{
      name:"Body Wash",
      exp:4,
      price:20000
  },{
    name:"Re-paint & Tinkering",
    exp:14,
    price:50000
  },{
    name:"Tyre CARE",
    exp:6,
    price:220000
  },{
    name:"Body Polish",
    exp:12,
    price:230000
  },
  {
    name:"Inteior Designing",
    exp:12,
    price:230000
  },
  {
    name:"Audio Visual System Upgrading",
    exp:12,
    price:230000
  }]

});
