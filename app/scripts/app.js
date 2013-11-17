var App = window.App = Ember.Application.create({
	VERSION: '0.0.1',
	LOG_TRANSITIONS: true,
	rootElement: '#app',
  TESTING: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
