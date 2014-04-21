define([
	'jquery',
	'backbone',
	'model/User',
	'model/BankAccount',
	'text!template/home/page.html',
	'view/registration/Step1',
	'view/registration/Step2',
], function($, Backbone, User, BankAccount, pageTemplate, Step1, Step2) {

	/**
	 * Homepage view controller
	 */
	var HomeView = Backbone.View.extend({

		/**
		 * Main content wrapper
		 */
		el: $('#main'),

		currentStep: -1,

		steps: [
			Step1,
			Step2
		],

		events: {
			'submit form.step': 'nextStep',
			'click #previous': 'previousStep'
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
			var $step = new this.steps[this.currentStep]({el: '.steps'});
			$step.render();
		},

		previousStep: function() {
			this.currentStep--;
			var $step = new this.steps[this.currentStep]({el: '.steps'});
			$step.render();
		},

		submit: function() {

		}
	});

	return HomeView;
});
