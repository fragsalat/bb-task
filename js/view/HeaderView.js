define([
	'backbone',
	'text!template/header.html'
], function(Backbone, template) {

	/**
	 * Define header view controller
	 */
	var HeaderView = Backbone.View.extend({

		/**
		 * Main header
		 */
		el: $('#header'),

		/**
		 * Render the header including menu and login form
		 */
		render: function() {
			this.$el.html(template);
		}
	});

	return HeaderView;
});
