define([
	'jquery',
	'backbone',
	'model/User',
	'model/BankAccount',
	'text!template/home/page.html',
	'view/registration/Step1',
	'view/registration/Step2',
], function($, Backbone, User, BankAccount, pageTemplate) {

	/**
	 * Homepage view controller
	 */
	var HomeView = Backbone.View.extend({

		/**
		 * Main content wrapper
		 */
		el: $('#main'),

		currentStep: 0,

		events: {
			'submit form.step': 'nextStep'
		},

		/**
		 * Render the main content
		 */
		render: function() {
			this.$el.html(pageTemplate);
			this.nextStep();
		},

		nextStep: function() {
			this.currentStep++;
			console.log(this['step' + this.currentStep]);
			if (this['step' + this.currentStep] !== undefined) {
				this['step' + this.currentStep]();
			}
		},

		step1: function() {
			console.log(this['step' + this.currentStep]);
			this.$el.find('.steps').append(step1Template);
			this.$el.find('form').bind('submit', $.proxy(this.step1Validate, this));
		},

		step1Validate: function(event) {
			var $firstName = $(event.currentTarget).find('#firstName').val();
			var $lastName = $(event.currentTarget).find('#lastName').val();
			var $birthday = $(event.currentTarget).find('#birthday').val();
			// Create user object from form data
			var $user = new User({
				firstName: $firstName,
				lastName: $lastName,
				birthday: $birthday
			});
			// Check if the user object is invalid
			if (!$user.isValid()) {
				alert($user.validationError);
				return;
			}
			this.nextStep();
		},

		step2: function() {
			this.$el.find('.steps').append(step2Template);
			this.$el.find('form').bind('submit', $.proxy(this.step2Validate, this));
		},

		step2Validate: function(event) {

		},

		submit: function() {

		}
	});

	return HomeView;
});
