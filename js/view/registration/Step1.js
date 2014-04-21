define([
	'jquery',
	'underscore',
	'backbone',
	'text!template/registration/step1.html',
	'model/User'
], function($, _, Backbone, template, User) {

	var Step1 = Backbone.View.extend({

		events: {
			'submit form': 'submit'
		},

		data: {},

		submit: function(event) {
			event.preventDefault();

			var $user = new User({
				firstName: $(event.currentTarget).find('#firstName').val(), 
				lastName: $(event.currentTarget).find('#lastName').val(),
				birthday: $(event.currentTarget).find('#birthday').val()
			});

			if (!$user.isValid()) {
				alert($user.validationError);
			}
			else {
				this.data['user'] = $user;
			}
		},

		getData: function() {
			return this.data;
		},

		render: function() {
			this.$el.html(template);
		}
	});

	return Step1;
});
