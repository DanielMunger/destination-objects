function Destination(locations, landmark, time, note) {
  this.locations = locations;
  this.landmarks = landmark;
  this.time = time;
  this.notes = note;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {

    $("ul").text("");
    var landmarkInput = [];
    var locationInput = $("input#new-location").val();
    landmarkInput.push($("input#landmark").val());
    landmarkInput.push($("input#landmark-two").val());
    landmarkInput.push($("input#landmark-three").val());
    var timeInput = $("input#time-of-year").val();
    var noteInput = $("input#notes").val();

    var newDestination = new Destination(locationInput, landmarkInput, timeInput, noteInput);

    newDestination.landmarks.forEach(function(landmark){
      $("ul").append("<li>" + landmark + "</li>");
    });
    $(".location").text(newDestination.locations);
    $(".landmarks").text(newDestination.landmarks);
    $(".time-of-year").text(newDestination.time);
    $(".notes").text(newDestination.notes);
    event.preventDefault();
  });
});
