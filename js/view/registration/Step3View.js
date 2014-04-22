define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!template/registration/step3.html'
], function($, _, Backbone, Handlebars, template) {

	/**
	 * View for html form of step two on registration process
	 */
	var Step3View = Backbone.View.extend({

		/**
		 * Compiled template
		 * @type callable
		 */
		template: Handlebars.compile(template),

		/**
		 * User submitted form data
		 * @type object
		 */
		data: {},

		/**
		 * Bind and initialize data
		 * @param  object options Form data passed through the steps
		 */
		initialize: function(options) {
			for (var $i in options) {
				this[$i] = options[$i];
			}
		},

		/**
		 * Insert compiled template with data to document
		 */
		render: function() {
			this.$el.html(this.template(this.data));
		}
	});

	return Step3View;
});
