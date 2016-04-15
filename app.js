//http://blog.miniasp.com/post/2015/06/07/Using-Visual-Studio-Code-with-AngularJS.aspx
//https://dotblogs.com.tw/clark/2015/07/02/151701
/// <reference path="typings/tsd.d.ts" />
var Kim;
(function (Kim) {
    var MyApp = (function () {
        function MyApp($scope) {
            this.$scope = $scope;
        }
        MyApp.prototype.Init = function () {
            this.Foo = "Boo";
        };
        return MyApp;
    }());
    Kim.MyApp = MyApp;
    /**
    * name
    */
    var MyController = (function () {
        function MyController($scope) {
            this.$scope = $scope;
        }
        MyController.prototype.NewModel = function () {
            this.Name = "Hello";
        };
        return MyController;
    }());
    Kim.MyController = MyController;
})(Kim || (Kim = {}));
//# sourceMappingURL=app.js.map