Utilities / Libraries
==============

Libraries used in these application:
- Backbone
- RequireJS
- Handlebars
- jQuery
- jQuery UI
- IBAN validation script
- UnderscoreJS
- Compass

Backbone
--------------

To provide a MVC structure we'll use backbone.
There are 2 Models User and BankAccount wich will be used in the Step Views within the RegistrationView.
The User model represents the basic personal data about the user.
BankAccount simply hold iban and bic data for a bank account related to a User object.
In this application we registered two routes. The default route points to the HomeView.
The route register points to the RegistrationView which displays a step by step registration form.

RequireJS
--------------

It is used to provide a modular development and easily load required libraries.
The main configuration can be found in /js/app.js

Handlebars
--------------

This is our little template engine.
It compiles our html templates we loaded with RequireJS into a function.
To these function we can pass some data we want to handle within the template

jQuery / jQuery UI
--------------

jQuery is used within Backbone and to manipulate the DOM.
The UI just contains a datepicker to make it easy to select the birthday.

IBAN
--------------

We use these script to validate the IBAN structure before saving the bank account model.

UnerscoreJS
--------------

Its just used by Backbone

Compass
--------------

For a more comfortable style development we use compass.
It gives us the ability to inherit our styles and write nested style rules.
With its mixins we also can provide a hudge browser compatibility.
To compile or watch the stylesheets during the development navigate into the style folder and run compass.

```
compass compile style
# or
compass watch style

```