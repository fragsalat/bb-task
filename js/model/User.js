define([
	'underscore',
	'backbone'
], function(_, Backbone) {

	/**
	 * Create User model
	 */
	var User = Backbone.Model.extend({

		/**
		 * Regex to validate names with ascii defaults
		 */
		nameRegex: /[a-zA-Z\s]+/,

		/**
		 * Object default properties
		 */
		defaults: {
			firstName: null,
			lastName: null,
			birthday: null
		},

		/**
		 * Validate the user properties
		 * @param  Object properties New user property values
		 * @param  Object options
		 * @return String Error if validation fails
		 */
		validate: function(properties, options) {
			if (!properties.firstName || !this.nameRegex.test(properties.firstName)) {
				return 'First name is missing or wrong';
			}
			if (!properties.lastName || !this.nameRegex.test(properties.lastName)) {
				return 'Last name is missing or wrong';
			}
		}
	});

	return User;
});
