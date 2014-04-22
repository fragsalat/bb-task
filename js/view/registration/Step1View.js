define([
	'jquery_ui',
	'underscore',
	'backbone',
	'handlebars',
	'model/User',
	'text!template/registration/step1.html'
], function($, _, Backbone, Handlebars, User, template) {

	/**
	 * View for html form of step one on registration process
	 */
	var Step1View = Backbone.View.extend({

		/**
		 * Compiled template
		 * @type callable
		 */
		template: Handlebars.compile(template),

		/**
		 * Map of bound events
		 * @type object
		 */
		events: {
			'submit form': 'submit'
		},

		/**
		 * User submitted form data
		 * @type object
		 */
		data: {},

		/**
		 * Identifier if the form was valid submitted
		 * @type boolean
		 */
		_done: false,

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
		 * Callback for step form submit
		 * @param  object event Javascript event object
		 */
		submit: function(event) {
			event.preventDefault();
			// Create new user object
			var $user = new User({
				firstName: $(event.currentTarget).find('#firstName').val(),
				lastName: $(event.currentTarget).find('#lastName').val(),
				birthday: $(event.currentTarget).find('#birthday').val()
			});
			// Validate the user object
			if (!$user.isValid()) {
				alert($user.validationError);
			}
			else {
				this.data['user'] = $user;
				this._done = true;
			}
		},

		/**
		 * Determine if the step was passed successful
		 * @return boolean True if successful passed
		 */
		isDone: function() {
			return this._done;
		},

		/**
		 * Insert compiled template with data to document
		 */
		render: function() {
			this.$el.html(this.template(this.data));
			this.$el.find('#birthday').datepicker();
		}
	});

	return Step1View;
});
