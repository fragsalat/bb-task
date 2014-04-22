define([
	'jquery_ui',
	'underscore',
	'backbone',
	'handlebars',
	'text!template/registration/page.html',
	'view/registration/Step1View',
	'view/registration/Step2View',
	'view/registration/Step3View'
], function($, _, Backbone, Handlebars, template, Step1View, Step2View, Step3View) {

	/**
	 * Registration page view controller
	 */
	var RegistrationView = Backbone.View.extend({

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
			'submit form.step': 'nextStep',
			'click #previous': 'previousStep'
		},

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
			Step1View,
			Step2View,
			Step3View
		],

		/**
		 * User submitted data
		 * @type object
		 */
		data: { },

		/**
		 * Bind and initialize data
		 * @param  object options Form data passed through the steps
		 */
		initialize: function() {
			// Clean initialize the data
			this.stepIndex = -1;
			this.currentStep = null;
			this.data = {};
			
			this.nextStep();
		},

		/**
		 * Render the main content
		 */
		render: function() {
			this.$el.html(this.template(this.data));
			// Initialize the step and render it
			this.currentStep = new this.steps[this.stepIndex]({
				el: '.steps',
				data: this.data
			});
			this.currentStep.render();
		},

		/**
		 * Collect form data and show the next step
		 * @param  object event Javascript event object
		 */
		nextStep: function(event) {
			// Abort if the current step is not done yet
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

		/**
		 * Collect form data and show the previous step
		 * @param  object event Javascript event object
		 */
		previousStep: function(event) {
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

	return RegistrationView;
});
