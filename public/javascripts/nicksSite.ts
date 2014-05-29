///<reference path='lib/typescript-lib-defs/yui.d.ts'/>
///<reference path='lib/typescript-lib-defs/underscore.d.ts'/>

///<reference path='utilities/templateManager.ts'/>
///<reference path='utilities/com.ts'/>

///<reference path='home.ts'/>

module NicksSite{

    var _nicksSiteInit:any = {
            serverRouting   :false,
            container       :'#nicks-site',
            transitions: true
        };


    export var App:Y.App;
    export var model:any;
    export var currentUser;

    YUI().use(
        'app',
        'panel',
        'handlebars',
        function (Y :Y.YUI) {
            Y.once('domready', function (e:Y.EventFacade) {

                var NicksSite:Function = Y.Base.create('nicksSite', Y.App, [], {
                    // Registering the views
                    views: {
                        home:{
                            type:Views.Home.view
                        }
                    },
                    navigateToHome: function (e?:Y.EventFacade) {
                        var activeView = App.get('activeView');
                        //disable navigation to this view if it is already up
                        if (activeView && activeView.name === "home") {
                            return;
                        }
                        App.navigate('/');
                    }

                }, {});
                Y.once('domready',()=>{
                    //initializing our app
                    App = new NicksSite(_nicksSiteInit);
                    //initializing all the routes for the app
                    App.route('/', function () {App.showView('home');});
                    App.render().save('/');
                });
            });
        });
}