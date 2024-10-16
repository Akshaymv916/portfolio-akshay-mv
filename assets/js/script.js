

//Hiding the Preloader
$('body').css("overflow", "hidden");
$(window).on('load', () => {
  $('.loader').fadeOut();
  $('.loader-body').delay(1150).fadeOut('slow');
  $('body').delay(100).css({ 'overflow': 'visible' });
});



$(document).ready(() => {



  //NavBar Drop Shadow on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.nav-bar').addClass('floatingNav');
    } else {
      $('.nav-bar').removeClass('floatingNav');
    }
  });


  // Menu bar for Mobile
  $('.ham').click(function clickMenu() {

    //Making Side Menu Bar Visible/Invisible On Menu Click
    $('.nav-elements').toggleClass('nav-visible');


    //Making Side Menu Invisible when clicked on any link/btn in menu
    if ($('.nav-elements').hasClass('nav-visible')) {
      $('body').css("overflow", "hidden");
      $('.nav-link').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
      $('.nav-btn').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
    }
    else {
      $('body').css("overflow", "visible");
    }

  });


  


  //Setting Activate Tab in About Section
  viewTab('skills', "skill-head");



  //Showing & Hiding Card Content on Click
  $('.project-card').click(function () {

    let thisCard = $(this), thisCardContent = $(this).children('.card-content');

    thisCardContent.toggleClass('view-card-details');

    $('.card-content').not(thisCardContent).removeClass('view-card-details');

  });


  //Hiding extra cards in Portfolio
  

});



function viewTab(tabName, tabHead) {
  $('.tab').removeClass('active');
  $('#' + tabHead).toggleClass('active');

  $('.tab').css({ color: "var(--primary-text)" });
  $('#' + tabHead).css({ color: "var(--red)" });

  $('.tab-contents').css({ display: "none" });
  $('.' + tabName).css({ display: "block" });
}

function viewProject(tabName, tabHead) {
  $('.tab').removeClass('active');
  $('#' + tabHead).toggleClass('active');

  $('.tab').css({ color: "var(--primary-text)" });
  $('#' + tabHead).css({ color: "var(--red)" });

  $('.project-content').css({ display: "none" });
  $('.' + tabName).css({ display: "grid" });
}

function viewallProject(tabHead){

  $('.tab').removeClass('active');
  $('#' + tabHead).toggleClass('active');

  $('.tab').css({ color: "var(--primary-text)" });
  $('#' + tabHead).css({ color: "var(--red)" });
  
  $('.project-content').css({ display: "grid" });
}



function viewProjectTab(tabName, tabHead) {

  let noOfProjects = $('.' + tabName + '> .project-card').length;

  noOfProjects >= 3 ? $('.view-more').css({ display: "flex" }) : $('.view-more').css({ display: "none" });


  $('.project-tab').removeClass('active-project');
  $('#' + tabHead).toggleClass('active-project');

  $('.project-content').css({ display: "none" });
  $('.' + tabName).css({ display: "grid" });

}


var x=document.getElementById("mainprj");
var y=document.getElementById("miniprj");

function miniproject(){
  y.style.display="block";
  x.style.display="none";
}
