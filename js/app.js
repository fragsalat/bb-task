require.config({
	paths: {
		jquery: 'lib/jquery.min',
		jquery_ui: 'lib/jquery-ui.min',
		underscore: 'lib/underscore.min',
		backbone: 'lib/backbone.min',
		handlebars: 'lib/handlebars',
		iban: 'lib/iban',
		text: 'lib/require.text.min',
		template: '../template'
	},
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        jquery: {
        	exports: '$',
        },
        jquery_ui: {
        	exports: '$',
        	deps: ['jquery']
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        },
        iban: {
        	exports: 'IBAN'
        }
    }
});

require([
	'router'
], function(Router) {
	Router.initialize();
})
