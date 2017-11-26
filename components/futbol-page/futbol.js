define(["knockout", "text!./futbol.html", "jquery", "./controller","lodash", "moment"], function (ko, template, $, controller, _, moment) {
    
    var getDate = function(date){
        return moment(date).format("DD/MM/YYYY HH:mm");
    };
      function ViewModel(route) {
        var matches = ko.observableArray([]);
        controller.fixtures().done(function(response) {
          // do something with the response, e.g. isolate the id of a linked resource        
        //   var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
        //   var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
        //   var teamId = res[1];
        //   console.log(teamId);
        
        matches(_.orderBy(response.fixtures, ['status'],['date']));

        });
        
        return {
            matches: matches,
            getDate: getDate
        };
      }
    
      return { viewModel: ViewModel, template: template };
    });
    