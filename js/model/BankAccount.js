define([
	'underscore',
	'backbone',
	'iban'
], function(_, Backbone, IBAN) {

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
		 * Validate properties before set
		 *
		 * @param  Object properties New user property values
		 * @param  Object options
		 * @return String Error if validation fails
		 */ate: function(properties, options) {
			// Validate the given iban structure
			if (!properties.iban || !IBAN.isValid(properties.iban)) {
				return 'Invalid IBAN';
			}
		}
	});
});
