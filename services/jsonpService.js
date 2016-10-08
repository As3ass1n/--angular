var app = angular.module("douban.ml.jsonp", [])
app.factory("jsonpService", function ($rootScope) {
    var count = 0;

    console.log("hello")
    return function (url, callback) {
        var fnName = '_jsonp_' + count++;
        window[fnName] = function (data) {
            callback(data);

            $rootScope.$apply();
        };

        var scriptEl = document.createElement("script");
        var newUrl = url.replace("JSON_CALLBACK", fnName);
        scriptEl.src = newUrl;
        document.body.appendChild(scriptEl);
    }
});