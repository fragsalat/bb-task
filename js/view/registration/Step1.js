define([
	'jquery',
	'underscore',
	'backbone',
	'text!template/registration/step1.html'
], function($, _, Backbone, template) {

	var Step1 = Backbone.View.extend({

		events: {
			'submit form': 'submit'
		},

		submit: function(event) {
			event.preventDefault();
			console.log('test');
		},

		render: function() {
			this.$el.html(template);
		}
	});

	return Step1;
});
