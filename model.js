(function () {
    var modelModule = angular.module('douban.ml', ['douban.ml.jsonp']);
    modelModule.factory('modelService', function (jsonpService) {

        return {
            getInTheaters: function (start, count, callback) {
                var url = 'https://api.douban.com/v2/movie/in_theaters?' +
                    'start=' + start +
                    '&count=' + count +
                    '&callback=JSON_CALLBACK';
                jsonpService(url, function (data) {
                    callback(data);
                })
            },
            getTop250: function (start, count, callback) {
                var url = 'https://api.douban.com/v2/movie/top250?' +
                    'start=' + start +
                    '&count=' + count +
                    '&callback=JSON_CALLBACK';
                jsonpService(url, function (data) {
                    callback(data);
                });
            },
            getComingSoon: function (start, count, callback) {
                var url = 'https://api.douban.com/v2/movie/coming_soon?' +
                    'start=' + start +
                    '&count=' + count +
                    '&callback=JSON_CALLBACK';
                jsonpService(url, function (data) {
                    callback(data);
                });
            },

            //获取电影详情
            getSubject: function (id,callback) {
                var url = `http://api.douban.com/v2/movie/subject/${id}?&callback=JSON_CALLBACK`;
                jsonpService(url,function(data){
                    callback(data);
                })

            }
        }
    })
})()