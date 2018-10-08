var users = [];
var i = 0;

var getData = (function($) {
  var URL =
    "https://api.github.com/repos/rowhitswami/hacktoberfest18-ft/contributors";

  $.get(URL, function(data, status) {
    console.log(data);
    data.forEach(function(d) {
      if (d.login == null) {
        return true;
      }

      if (users.indexOf(d.id) == -1) {
        var name = d.login;

        var template =
          "<div class='col-md-3 col-xs-6 col-lg-3' id='author'><div class='container-fluid'>" +
          "<a class='thumbnail' target='_blank' href='" +
          d.html_url +
          "'>" +
          "<img src='" +
          d.avatar_url +
          "' alt='' class='img-responsive'>" +
          "</a>" +
          "<div class='caption'>" +
          "<a target='_blank' href='" +
          d.html_url +
          "'>" +
          "<strong>" +
          d.login +
          "</strong>" +
          "</a>" +
          "<p>" +
          d.login +
          "</p>" +
          "</div></div></div>";

        $("#contributors").append(template);
        users[i] = d.id;
        i = i + 1;
      }
    });
  });
})($);
