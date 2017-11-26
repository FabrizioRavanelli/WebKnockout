define(["knockout", "text!./home.html"], function (ko, template) {

  function ViewModel(route) {
    
    return {
      myMessage: ko.observable("Siggi!")
    };
  }

  return { viewModel: ViewModel, template: template };
});
