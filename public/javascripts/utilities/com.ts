
module Utilities{
    var _Y = Utilities.Y;
    export module com{
        export var getData = (url:string, callback:Function, async:boolean = true)=> {
            Y.io(url, {
                sync: sync,
                on: {
                    success: (d, e) => {
                        var json = Y.JSON.parse(e.responseText);
                        callback(json);
                    },
                    failure: function (d, e) {
                    }
                }
            });
    };
        export var post = (endUrl:string, data:any = {}, callback:Function = ()=> {return;}) => {
            var cfg = {
                method: 'POST',
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
                on: {
                    complete: function (transID, res, arguments) {
                        var status = res.response;
                        //make sure we were passed a function
                        if(typeof callback === "function"){
                            callback(status);
                        }
                    }
                }
            };
            _Y.io(endUrl, cfg);
        };

        export var put = (endUrl:string, data:any = {}) => {
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
    };
}