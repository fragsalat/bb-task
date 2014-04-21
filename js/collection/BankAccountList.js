define([
	'underscore',
	'backbone',
	'model/BankAccount'
], function(_, Backbone, BankAccount) {

	/**
	 * List BankAccount objects
	 */
	var BankAccountList = Backbone.Collection.extend({
		model: BankAccount
	});

	return BankAccountList;
});