define([
	'jquery',
	'underscore',
	'backbone',
	'model/BankAccount',
	'collection/BankAccounts'
	'text!template/registration/step2.html'
], function($, _, Backbone, template) {

	var Step2 = Backbone.View.extend({

		events: {
			'submit form': 'submit'
		},

		data: {},

		submit: function(event) {
			event.preventDefault();

			var $account = new BankAccount({
				owner: $(event.currentTarget).find('#owner').val(), 
				iban: $(event.currentTarget).find('#iban').val()
				bic: $(event.currentTarget).find('#bic').val()
			});

			if (!$account.isValid()) {
				alert($account.validationError);
			}
			else {
				this.data['bankAccounts'].add($account);
			}
		},

		getData: function() {
			return this.data;
		},

		render: function() {
			this.$el.html(template);
		}
	});

	return Step2;
});
