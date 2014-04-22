define([
	'jquery',
	'underscore',
	'backbone',
	'model/BankAccount',
	'collection/BankAccountList',
	'text!template/registration/step2.html'
], function($, _, Backbone, BankAccount, BankAccountList, template) {

	var Step2 = Backbone.View.extend({

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
			// Create a set of bank accounts
			if (!(this.data['bankAccounts'] instanceof BankAccountList)) {
				this.data['bankAccounts'] = new BankAccountList();
			}
		},

		submit: function(event) {
			event.preventDefault();
			console.log('step2', this.data);

			var $account = new BankAccount({
				owner: $(event.currentTarget).find('#owner').val(),
				iban: $(event.currentTarget).find('#iban').val(),
				bic: $(event.currentTarget).find('#bic').val()
			});

			if (!$account.isValid()) {
				alert($account.validationError);
			}
			else {
				this.data['bankAccounts'].add($account);
				this._done = true;
			}
		},

		isDone: function() {
			return this._done;
		},

		render: function() {
			this.$el.prepend(template);
		}
	});

	return Step2;
});
