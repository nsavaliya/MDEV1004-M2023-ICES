(function () {
    function StartAll() {
        Start1();
        Start2();
        Start3();
    }
    /* function type 1 = named functions*/
    function Start1() {
        console.log("App Started - type 1");
    }
    /* function type 2 = anonymous functions pointed to by avariable or const*/
    var Start2 = function () {
        console.log("App Started - type 2");
    };
    /* function type 3 = arrow function */
    var Start3 = function () {
        console.log("App Started - type 3");
    };
    window.addEventListener("load", StartAll);
})();
//# sourceMappingURL=app.js.map