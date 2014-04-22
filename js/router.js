define([
	'backbone',
	'view/HomeView',
	'view/registration/RegistrationView',
	'view/HeaderView'
], function(Backbone, HomeView, RegistrationView, HeaderView) {

	/**
	 * Create application router class
	 */
	var Router = Backbone.Router.extend({

		/**
		 * Instance of current view
		 * @type object
		 */
		currentView: null,

		/**
		 * Map of action callback pairs
		 * @type object
		 */
		routes: {
			'register': 'register',
			'*actions': 'home'
		},

		/**
		 * Initialize and render the homepage controller
		 */
		home: function() {
			if (this.currentView && this.currentView.remove) {
				this.currentView.undelegateEvents();
			}
			this.currentView = new HomeView();
			this.currentView.render();
		},

		/**
		 * Initialize and render the homepage controller
		 */
		register: function() {
			if (this.currentView && this.currentView.remove) {
				this.currentView.undelegateEvents();
			}
			this.currentView = new RegistrationView();
			this.currentView.render();
		}
	});

	return {
		initialize: function() {
			var $route = new Router();

			// Initialize the header
			var $header = new HeaderView();
			$header.render();

			Backbone.history.start();
		}
	};
});
