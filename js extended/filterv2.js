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
