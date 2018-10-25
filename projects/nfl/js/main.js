//Function to capitalize First Letter
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const rootUrl = "http://www.nfl.com/";
function getScores(url, row) {

  $.ajax({
      type: "GET",
      url: url,
      dataType: "xml",
      async: false,
      success: function(xml) {
        $(xml).find("g").each(function() {
          var $quarter = $(this).attr('q');
          if ($quarter === 'F') {
            $status = "Final";
          } else if ($quarter === 'P') {
            $status = $(this).attr('d') + " " + $(this).attr('t') + " EST";
          } else if ($quarter === 'H') {
            $status = "Halftime";
          } else if ($quarter === "FO") {
            $status = "Final/OT";
          } else {
            $status = "Live - Q" + $quarter + " " + $(this).attr('k');
          }
          $('.row' + row).append(
                      "<div class='col-sm-6 col-md-4'>" +
                      "<div class='table-responsive'>" +
                      "<table class='table table-bordered'>" +
                      "<tr>" +
                      "<td class='homeTeam'>" +
                      "<img src='includes/img/" + $(this).attr('hnn') + ".png'" + ">" +
                      $(this).attr('hnn').capitalizeFirstLetter() + "</td>" +
                      "<td class='homeScore'>" + $(this).attr('hs') + "</td>" +
                      "</tr>" +
                      "<tr>" +
                      "<td class='awayTeam'>" +
                      "<img src='includes/img/" + $(this).attr('vnn') + ".png'" + ">" +
                      $(this).attr('vnn').capitalizeFirstLetter() + "</td>" +
                      "<td class='awayScore'>" + $(this).attr('vs') + "</td>" +
                      "</tr>" +
                      "<tr>" +
                      "<td colspan='2'>" + $status + "</td>" +
                      "</tr>" +
                      "</table>" +
                      "</div>" +
                      "</div>"
                    );


      });
    }
  });
}


function checkSelect(){
  for (let i = 1; i < 18; i++) {
    selectedWeek = $('.form-control').val();
    if (selectedWeek == i.toString()) {
      let url = rootUrl + "ajax/scorestrip?season=%d&seasonType=REG&week=" + i;
      getScores(url , "1");
    }
  }

  selectedWeek = $('.form-control').val();

  if (selectedWeek == "Wildcard") {
    getScores(rootUrl + "ajax/scorestrip?season=%d&seasonType=POST&week=18", "1");
  }

  else if (selectedWeek == "Divisional") {
    getScores(rootUrl +"ajax/scorestrip?season=%d&seasonType=POST&week=19", "1");
  }

  else if (selectedWeek == "Conference") {
    getScores(rootUrl + "ajax/scorestrip?season=%d&seasonType=POST&week=20", "1");
  }

  else if (selectedWeek == "Superbowl") {
    getScores(rootUrl + "ajax/scorestrip?season=%d&seasonType=POST&week=22", "1");
  }
}





checkSelect();
$('.form-control').change(function() {
  $('.row1').empty();
  checkSelect();
});

getScores(rootUrl + "liveupdate/scorestrip/ss.xml", "0");
