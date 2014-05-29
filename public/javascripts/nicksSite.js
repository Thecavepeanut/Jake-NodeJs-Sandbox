///<reference path='lib/typescript-lib-defs/yui.d.ts'/>
///<reference path='lib/typescript-lib-defs/underscore.d.ts'/>
///<reference path='utilities/templateManager.ts'/>
///<reference path='utilities/com.ts'/>
///<reference path='home.ts'/>
var NicksSite;
(function (_NicksSite) {
    var _nicksSiteInit = {
        serverRouting: false,
        container: '#nicks-site',
        transitions: true
    };

    _NicksSite.App;
    _NicksSite.model;
    _NicksSite.currentUser;

    YUI().use('app', 'panel', 'handlebars', function (Y) {
        Y.once('domready', function (e) {
            var NicksSite = Y.Base.create('nicksSite', Y.App, [], {
                // Registering the views
                views: {
                    home: {
                        type: Views.Home.view
                    }
                },
                navigateToHome: function (e) {
                    var activeView = _NicksSite.App.get('activeView');

                    //disable navigation to this view if it is already up
                    if (activeView && activeView.name === "home") {
                        return;
                    }
                    _NicksSite.App.navigate('/');
                }
            }, {});
            Y.once('domready', function () {
                //initializing our app
                _NicksSite.App = new NicksSite(_nicksSiteInit);

                //initializing all the routes for the app
                _NicksSite.App.route('/', function () {
                    _NicksSite.App.showView('home');
                });
                _NicksSite.App.render().save('/');
            });
        });
    });
})(NicksSite || (NicksSite = {}));
//# sourceMappingURL=nicksSite.js.map
