define([
	'jquery',
	'backbone',
	'text!template/home/page.html'
], function($, Backbone, pageTemplate) {

	/**
	 * Homepage view controller
	 */
	var HomeView = Backbone.View.extend({
		
		/**
		 * Main content wrapper
		 */
		el: $('#main'),

		/**
		 * Render the main content
		 */
		render: function() {
			this.$el.html(pageTemplate);
		}
	});

	return HomeView;
});