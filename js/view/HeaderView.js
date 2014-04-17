define([
	'jquery',
	'backbone',
	'text!template/header.html'
], function($, Backbone, headerTemplate) {

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
			this.$el.html(headerTemplate);
		}
	});

	return HeaderView;
});
