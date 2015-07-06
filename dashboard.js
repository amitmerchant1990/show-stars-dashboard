/*!
  Show Stars Dashboard v1.0.1
  (c) 2015 Amit Merchant
  updated: 2015-07-06
  license: MIT
  http://amitmerchant1990.github.io/show-stars-dashboard
*/
$(document).ready(function() {
  init();
})

function init() {
  
    $('#repo_listing .mini-repo-list-item').each(function(){
      var currentRepo = $(this);
      var getHref =  currentRepo.attr("href");
      
      $.ajax({
          url: "https://api.github.com/repos"+getHref,
          type: "get",
          dataType: 'json',
          success: function(data) {
              var stars = data.stargazers_count;
              currentRepo.prepend('<span class="stars">'+stars+'<span class="octicon octicon-star"></span></span>');
          },
          error: function() {
              alert("failure");
          }
      });
    })
  
}
