var listModule = angular.module("douban.ml.list", ['ngRoute', 'douban.ml']);

listModule.controller("listController", function ($scope, $routeParams, modelService) {
    $scope.name = "list";
    $scope.routeParams = $routeParams;
    $scope.isWaiting = true;
    var category = $routeParams.category;
    var page = $routeParams.page - 0;
    var itemsPerPage = 12;
    var start = (page - 1) * itemsPerPage;
    var totalPage = 0;

    switch (category) {
        case 'coming_soon':
            modelService.getComingSoon(start, itemsPerPage, function (data) {
                $scope.listData = data;
                $scope.isWaiting = false;
                //总页数
                totalPage = Math.ceil(data.total / itemsPerPage);
                $scope.totalPage = totalPage;
                $scope.page = page;
                $scope.prev = '/list/coming_soon/' + Math.ceil(page - 1 < 1 ? 1 : page - 1);
                $scope.next = '/list/coming_soon/' + (page + 1> totalPage ? totalPage : page - 0 + 1);

            });
            break;
        case 'top250':
            modelService.getTop250(start, itemsPerPage, function (data) {
                $scope.listData = data;
                $scope.isWaiting = false;

                totalPage = Math.ceil(data.total / itemsPerPage);
                $scope.totalPage = totalPage;
                $scope.page = page;
                $scope.prev = '/list/top250/' + Math.ceil(page - 1 < 1 ? 1 : page - 1);
                $scope.next = '/list/top250/' + (page + 1> totalPage ? totalPage : page - 0 + 1);
            });
            break;
        case 'in_theaters':
            modelService.getInTheaters(start, itemsPerPage, function (data) {
                $scope.listData = data;
                $scope.isWaiting = false;

                totalPage = Math.ceil(data.total / itemsPerPage);
                $scope.totalPage = totalPage;
                $scope.page = page;
                $scope.prev = '/list/in_theaters/' + Math.ceil(page - 1 < 1 ? 1 : page - 1);
                $scope.next = '/list/in_theaters/' + (page + 1> totalPage ? totalPage : page - 0 + 1);
            });
            break;

    }

})
