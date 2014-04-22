define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'model/BankAccount',
	'collection/BankAccountList',
	'text!template/registration/step2.html'
], function($, _, Backbone, Handlebars, BankAccount, BankAccountList, template) {

	/**
	 * View for html form of step two on registration process
	 */
	var Step2View = Backbone.View.extend({

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
			'submit form': 'submit',
			'click #add-account': 'addAccount',
			'click .remove-account': 'removeAccount'
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
			// Create a set of bank accounts
			if (!(this.data['bankAccounts'] instanceof BankAccountList)) {
				this.data['bankAccounts'] = new BankAccountList();
			}
		},

		/**
		 * Callback for step form submit
		 * @param  object event Javascript event object
		 */
		submit: function(event) {
			event.preventDefault();
			// Check if there is data inserted
			if (this.$el.find('#iban').val() || this.$el.find('#bic').val()) {
				// Create new BankAccount object
				var $account = new BankAccount({
					owner: this.$el.find('#owner').val(),
					iban: this.$el.find('#iban').val(),
					bic: this.$el.find('#bic').val()
				});
				// Check if the account is valid
				if (!$account.isValid()) {
					alert($account.validationError);
				}
				else {
					this.data['bankAccounts'].add($account);
				}
			}
			// Check if there are accounts saved
			if (this.data['bankAccounts'].length) {
				this._done = true;
			}
		},

		/**
		 * Callback for click event of add another account button
		 * @param  object event Javascript event object
		 */
		addAccount: function(event) {
			// Create new BankAccount object
			var $account = new BankAccount({
				owner: this.$el.find('#owner').val(),
				iban: this.$el.find('#iban').val(),
				bic: this.$el.find('#bic').val()
			});
			// Check if the account is valid
			if (!$account.isValid()) {
				alert($account.validationError);
			}
			else {
				this.data['bankAccounts'].add($account);
				this.render();
				// Remove required fields
				this.$el.find('[required]').removeAttr('required');
			}
		},

		/**
		 * Callback for click event on remove account button
		 * @param  object event Javascript event object
		 */
		removeAccount: function(event) {
			var $index = $(event.currentTarget).data('account-id');
			this.data['bankAccounts'].remove(this.data['bankAccounts'].at($index));
			this.render();
			// Check if there are still accounts saved
			if (!this.data['bankAccounts'].length) {
				this.$el.find('#iban, #bic').attr('required', '');
				this._done = false;
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
		}
	});

	return Step2View;
});
