var detailModule = angular.module("douban.ml.detail",['ngRoute','douban.ml']);

detailModule.controller("detailController",function ($scope,$routeParams,modelService) {


    var id = $routeParams.id;
    console.log(id);
    modelService.getSubject(id,function (data) {
        console.log(data);
        $scope.data = data;
    })
})
