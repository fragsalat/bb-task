define([
	'jquery',
	'underscore',
	'backbone',
	'text!template/registration/step2.html'
], function($, _, Backbone, template) {

	var Step2 = Backbone.View.extend({

		render: function() {
			this.$el.html(template);
		}
	});

	return Step2;
});
