var app=angular.module("myApp",[]);

app.controller("myController",function($scope){
  $scope.title="Our Services";

  $scope.datas=[{
      exp:"BW04",
      name:"Body Wash",
      price:200
  },{
    exp:"RT014",
    name:"Re-paint & Tinkering",
    price:340.30
  },{
    exp:"LC06",
    name:"Lube CARE",
    price:4200
  },{
    exp:"BP012",
    name:"Body Polish",
    price:2300.89
  },
  {
    exp:"ID012",
    name:"Inteior Designing",
    price:230.43
  },
  {

    exp:"AV012",
    name:"Audio Visual System Upgrading",
    price:55000
  }]

});
