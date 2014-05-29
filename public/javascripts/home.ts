///<reference path='nicksSite.ts'/>
module Views {
    export module Home {
        var _home =[
                {
                    header:'HERP DERPS',
                    caption:'Mason Bees are the best',
                    width:'600',
                    height:'300',
                    src:'../images/slide-1.jpg'
                },{
                    header:'HERP DERPS2',
                    caption:'Have no friends? Get Mason bees they will love you!',
                    width:'600',
                    height:'300',
                    src:'../images/slide-2.jpg'
                },{
                    header:'HERP DERPS3',
                    width:'600',
                    height:'300',
                    caption:"Have no mason bees? Get more because no one likes you.",
                    src:'../images/slide-3.jpg'
                }];

        export var view:Function;
        YUI().use(
            'app',
            'handlebars',
            function (Y:Y.YUI) {
                view = Y.Base.create('home', Y.View, [], {
                    containerTemplate:'<div id="home" class="home"></div>',
                    // Delegated DOM events to handle this view's interactions.
                    events: {
                    },

                    initializer: function () {
                    },

                    render: function () {
                        this.get('container').setHTML(Utilities.TM.render('home-slider',{home:_home}));
                        Y.once('domready', () => {
                            var options =
                            {
                                // default transition speed (ms)
                                speed : 500,
                                // default transition easing
                                easing : 'ease'
                            };
                            $( '#cbp-fwslider' ).cbpFWSlider( [options] );

                        });
                    }
                });
            })
    }
}