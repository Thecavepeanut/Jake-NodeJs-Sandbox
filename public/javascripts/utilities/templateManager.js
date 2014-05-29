///<reference path='utilities.ts'/>
var Utilities;
(function (Utilities) {
    Utilities.TM;

    //grabbing and stashing the needed _YUI modules.
    var _Y = Utilities.Y;
    var tmplCache;

    var TemplateManager = (function () {
        function TemplateManager() {
            var _this = this;
            this.render = function (tmplName, tmplData) {
                if (!tmplCache) {
                    tmplCache = {};
                }

                tmplData = tmplData ? tmplData : {};

                if (!tmplCache[tmplName]) {
                    var tmplDir = "/public/views/";

                    //forcing this to a synchronous request because we can not move on until
                    // we have the template and it is compiled.
                    _Y.io(tmplDir, {
                        sync: true,
                        data: tmplName,
                        headers: {},
                        on: {
                            success: function (d, e) {
                                return tmplCache[tmplName] = _Y.Handlebars.compile(e.responseText);
                            },
                            failure: function (d, e) {
                                console.log(d);
                                console.log(e);
                            }
                        }
                    }, _this);
                }

                return tmplCache[tmplName](tmplData);
            };
        }
        return TemplateManager;
    })();
    Utilities.TemplateManager = TemplateManager;

    Utilities.TM = new TemplateManager();
})(Utilities || (Utilities = {}));
//# sourceMappingURL=templateManager.js.map
