var work = function () {
    console.log("working hard!");
};

var doWork = function (f) {
    f();
};

doWork(work);
