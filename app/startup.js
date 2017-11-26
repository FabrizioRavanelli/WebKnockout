define(['jquery', 'knockout', './router', 'bootstrap'], function ($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('account-page', {
    template: { require: 'text!components/account-page/account.html' }
  });
  
  ko.components.register('contact-page', { require: 'components/contact-page/contact'});
  ko.components.register('hobbies-page', { require: 'components/hobbies-page/hobbies'});
  ko.components.register('biography-page', { require: 'components/biography-page/biography' });
  ko.components.register('futbol-page', { require: 'components/futbol-page/futbol' });
  
  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
