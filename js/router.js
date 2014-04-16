define([
	'backbone',
	'view/HomeView',
	'view/HeaderView'
], function(Backbone, HomeView, HeaderView) {

	/**
	 * Create application router class
	 */
	var Router = Backbone.Router.extend({
		routes: {
			'*actions': 'defaultAction'
		}
	});

	return {
		initialize: function() {
			var $route = new Router();

			/**
			 * Handle home page and undefined routes
			 */
			$route.on('route:defaultAction', function(actions) {
				// Initialize and render the homepage controller
				var $home = new HomeView();
				$home.render();
			});
			// Initialize the header
			var $header = new HeaderView();
			$header.render();

			Backbone.history.start();
		}
	};
});