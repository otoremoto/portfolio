//old version
/*function filterAll(){

  $('.nav-link').removeClass("active");
  $('#all').addClass("active");
  $('.project').removeClass("d-none");
  $("#work hr").removeClass("d-none");
  $("#work hr").last().addClass("d-none");

}
function filterUx(){

  $('.nav-link').removeClass("active");
  $('#ux').addClass("active");
  $('.project').addClass("d-none");
  $('.ux').removeClass("d-none");
  $("#work hr").removeClass("d-none");
  $("#work .ux hr").last().addClass("d-none");
}
function filterUi(){

  $('.nav-link').removeClass("active");
  $('#ui').addClass("active");
  $('.project').addClass("d-none");
  $('.ui').removeClass("d-none");
  $("#work hr").removeClass("d-none");
  $("#work .ui hr").last().addClass("d-none");

}
function filterGraphic(){

  $('.nav-link').removeClass("active");
  $('#graphic').addClass("active");
  $('.project').addClass("d-none");
  $('.graphic').removeClass("d-none");
  $("#work hr").removeClass("d-none");
  $("#work .graphic hr").last().addClass("d-none");

}
function filterAnimation(){

  $('.nav-link').removeClass("active");
  $('#animation').addClass("active");
  $('.project').addClass("d-none");
  $('.animation').removeClass("d-none");
  $("#work hr").removeClass("d-none");
  $("#work .animation hr").last().addClass("d-none");

}*/

//new version
var activeFilter="";
function filterProject(type){

  if(activeFilter != type){
    $('.project').filter("."+type).show();
    $('.project').filter(":not(."+type+")").hide();
    $('button').filter(":not(#"+type+")").removeClass("active");
    $('#'+type).addClass("active");
    $("#work hr").removeClass("d-none");
    $("#work ."+type+" hr").last().addClass("d-none");
    activeFilter=type;

  }

}
