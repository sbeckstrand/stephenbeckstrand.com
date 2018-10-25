String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


//Week 1 ajax
//Week 1 ajax



for (i=1; i !== 18; i += 1) {

  $.ajax({
      type: "GET",
      url: "http://www.nfl.com/ajax/scorestrip?season=2016&seasonType=REG&week=" +i,
      dataType: "xml",
      async: false,
      success: function(xml) {
        console.log(i);
        $(xml).find("g").each(function() {

          $(".row" + i).append(
                      "<div class='col-sm-6 col-md-4 col-lg-3'>" +
                      "<div class='table-responsive'>" +
                      "<table class='table table-bordered'>" +
                      "<tr>" +
                      "<td class='teamName'>" + $(this).attr('hnn').capitalizeFirstLetter() + "</td>" +
                      "<td>" + $(this).attr('hs') + "</td>" +
                      "</tr>" +
                      "<tr>" +
                      "<td class='teamName'>" + $(this).attr('vnn').capitalizeFirstLetter() + "</td>" +
                      "<td>" + $(this).attr('vs') + "</td>" +
                      "</tr>" +
                      "</table>" +
                      "</div>" +
                      "</div>"
                    );


      });
    }
  });
  console.log(i);


}
