define([
	'underscore',
	'backbone',
	'iban'
], function(_, Backbone) {

	/**
	 * Create model for Bank accounts
	 */
	var BankAccount = Backbone.Model.extend({

		/**
		 * Model defaults
		 */
		defaults: {
			owner: null,
			iban: null,
			bix: null
		},

		/**
		 * Regular expression to validate BIC structures
		 * @type RegExp
		 */
		bicRegex: /([a-zA-Z]{4}[a-zA-Z]{2}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?)/,

		/**
		 * Validate properties before set
		 * @param  Object properties New user property values
		 * @param  Object options
		 * @return String Error if validation fails
		 */
		validate: function(properties, options) {
			// Validate the given iban structure
			if (!properties.iban || !IBAN.isValid(properties.iban)) {
				return 'Invalid IBAN';
			}
			// Validate the structure of BIC code
			if (!properties.bic || !this.bicRegex.test(properties.bic)) {
				return 'Invalid BIC';
			}
		}
	});

	return BankAccount;
});
