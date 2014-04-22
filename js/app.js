require.config({
	paths: {
		jquery: 'lib/jquery.min',
		backbone: 'lib/backbone.min',
		underscore: 'lib/underscore.min',
		handlebars: 'lib/handlebars',
		iban: 'lib/iban',
		text: 'lib/require.text.min',
		template: '../template'
	},
    shim: {
        handlebars: {
            exports: 'Handlebars'
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
