$(document).ready(function(){

  console.log("123");
  $("form#transportation_survey").submit(function(event){
    console.log("456");

    $("#work-responses").show();


    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = ($(this).val()).toUpperCase();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();

    event.preventDefault();
  });
});
