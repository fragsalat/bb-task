define([
	'jquery',
	'underscore',
	'backbone',
	'model/User',
	'text!template/registration/step1.html',
	'handlebars'
], function($, _, Backbone, User, template) {

	var Step1 = Backbone.View.extend({

		template: Handlebars.compile(template),

		events: {
			'submit form': 'submit'
		},

		data: {},

		/**
		 * Identifier if the form was valid submitted
		 * @type boolean
		 */
		_done: false,

		initialize: function(options) {
			for (var $i in options) {
				this[$i] = options[$i];
			}
		},

		submit: function(event) {
			event.preventDefault();
			console.log('step1', this.data);

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
				this._done = true;
			}
		},

		isDone: function() {
			return this._done;
		},

		render: function() {
			this.$el.prepend(this.template(this.data));
		}
	});

	return Step1;
});
