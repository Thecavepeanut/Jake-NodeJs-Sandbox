var Utilities;
(function (Utilities) {
    var _Y = Utilities.Y;
    (function (com) {
        com.getData = function (url, callback, async) {
            if (typeof async === "undefined") { async = true; }
            Y.io(url, {
                sync: sync,
                on: {
                    success: function (d, e) {
                        var json = Y.JSON.parse(e.responseText);
                        callback(json);
                    },
                    failure: function (d, e) {
                    }
                }
            });
        };
        com.post = function (endUrl, data, callback) {
            if (typeof data === "undefined") { data = {}; }
            if (typeof callback === "undefined") { callback = function () {
                return;
            }; }
            var cfg = {
                method: 'POST',
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
                on: {
                    complete: function (transID, res, arguments) {
                        var status = res.response;

                        //make sure we were passed a function
                        if (typeof callback === "function") {
                            callback(status);
                        }
                    }
                }
            };
            _Y.io(endUrl, cfg);
        };

        com.put = function (endUrl, data) {
            if (typeof data === "undefined") { data = {}; }
            var cfg = {
                method: 'PUT',
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
                on: {
                    complete: function (transID, res, arguments) {
                        var status = res.statusText;
                        if (status !== "OK") {
                            //we did not save properly.
                        }
                    }
                }
            };
            _Y.io(endUrl, cfg);
        };
    })(Utilities.com || (Utilities.com = {}));
    var com = Utilities.com;
    ;
})(Utilities || (Utilities = {}));
//# sourceMappingURL=com.js.map
