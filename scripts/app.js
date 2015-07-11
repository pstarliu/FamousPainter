/// <reference path="typings/requirejs/require.d.ts" />
require.config({
    baseUrl: 'scripts',
    paths: {
        "jquery": "libs/jquery-2.1.4.min",
        "jquery.bootstrap": "libs/bootstrap.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"],
            exports: '$.fn.carousel'
        }
    }
});
// An attempt to get AMD with Bootstrap working, doesn't seems really necessary
//requirejs(['jquery', 'jquery.bootstrap', 'initializer'], function ($) {
//    // DOM ready
//    $(function () {
//        // Twitter Bootstrap 3 carousel plugin
//        $("#element").carousel();
//    });
//});
requirejs(['jquery', 'jquery.bootstrap', 'initializer']);
//# sourceMappingURL=app.js.map