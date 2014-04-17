require.config({
	paths: {
		jquery: 'lib/jquery.min',
		backbone: 'lib/backbone.min',
		underscore: 'lib/underscore.min',
		iban: 'lib/iban',
		text: 'lib/require.text.min',
		template: '../template'
	}
});

require([
	'router'
], function(Router) {
	Router.initialize();
})
