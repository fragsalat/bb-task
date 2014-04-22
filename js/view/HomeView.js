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

		/**
		 * The instance of the current step view
		 * @type object
		 */
		currentStep: null,

		/**
		 * Index of current step
		 * @type integer
		 */
		stepIndex: -1,

		/**
		 * Available steps in this view
		 * @type array
		 */
		steps: [
			Step1,
			Step2
		],

		/**
		 * User submitted data
		 * @type object
		 */
		data: {},

		events: {
			'submit form.step': 'nextStep',
			'click #previous': 'previousStep'
		},

		initialize: function() {
			this.nextStep();
			console.log('init');
		},

		/**
		 * Render the main content
		 */
		render: function() {
			console.log('render', this.$el);
			this.$el.html(pageTemplate);
			// Initialize the step and render it
			this.currentStep = new this.steps[this.stepIndex]({
				el: '.steps',
				data: this.data
			});
			this.currentStep.render();
		},

		nextStep: function(event) {
			if (this.currentStep && !this.currentStep.isDone()) {
				return;
			}
			// Check if there is a step displayed and if it is done
			if (this.currentStep) {
				this.data = $.extend(this.data, this.currentStep.data);
			}
			// Check if there is a next step available
			if (this.steps[this.stepIndex + 1] !== undefined) {
				this.stepIndex++;
			}
			else {
				return;
			}
			// Stop event and render the next step
			if (event) {
				event.preventDefault();
				this.render();
			}
		},

		previousStep: function() {
			// Check if there is a step displayed and if it is done
			if (this.currentStep) {
				this.data = $.extend(this.data, this.currentStep.data);
			}
			// Check if there is a next step available
			if (this.steps[this.stepIndex - 1] !== undefined) {
				// Initialize the next step and render it
				this.currentStep = new this.steps[--this.stepIndex]({
					el: '.step',
					data: this.data
				});
				this.render();
			}
		}
	});

	return HomeView;
});
