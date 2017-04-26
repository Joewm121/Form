$(function() {
  $("#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();

    $(".name1").text(name1Input);
    $("#story").show();

    event.preventDefault();
  });
});
