///<reference path='utilities.ts'/>


module Utilities {
    export var TM:TemplateManager;
        //grabbing and stashing the needed _YUI modules.
        var _Y:Y.YUI = Utilities.Y;
        var tmplCache;

    export class TemplateManager{

        public render = ( tmplName : string, tmplData? : any ) => {
            if( !tmplCache ){
                tmplCache = {};
            }

            tmplData = tmplData ? tmplData : {};

            if( ! tmplCache[tmplName] ){
                var tmplDir = "/public/views/";

                //forcing this to a synchronous request because we can not move on until
                // we have the template and it is compiled.
               _Y.io(tmplDir, {
                   sync: true,
                   data: tmplName,
                    headers: {
                    },
                    on: {
                        success: (d, e) => tmplCache[tmplName] = _Y.Handlebars.compile(e.responseText),
                        failure: (d, e) => { console.log(d); console.log(e); }
                    }
                },this);
            }

            return tmplCache[tmplName](tmplData);

        }
    }

    TM = new TemplateManager();

}