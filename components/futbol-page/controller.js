define(["jquery"], function ($) {
    
      return { 
          fixtures: function(){
              return $.ajax({
                headers: { 'X-Auth-Token': '824cfe8454ef4b61bcf0a9e85048999a' },
                url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
                dataType: 'json',
                type: 'GET',
              })
          }

        };
    });
    