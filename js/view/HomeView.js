define([
	'backbone',
	'text!template/home/page.html',
], function(Backbone, template) {

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
			this.$el.html(template);
		}
	});

	return HomeView;
});
