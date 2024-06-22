
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

});



function viewTab(tabName, tabHead) {
  $('.tab').removeClass('active');
  $('#' + tabHead).toggleClass('active');

  $('.tab').css({ color: "var(--primary-text)" });
  $('#' + tabHead).css({ color: "var(--red)" });

  $('.tab-contents').css({ display: "none" });
  $('.' + tabName).css({ display: "block" });
}



function viewProjectTab(tabName, tabHead) {

  let noOfProjects = $('.' + tabName + '> .project-card').length;

  noOfProjects >= 3 ? $('.view-more').css({ display: "flex" }) : $('.view-more').css({ display: "none" });


  $('.project-tab').removeClass('active-project');
  $('#' + tabHead).toggleClass('active-project');

  $('.project-content').css({ display: "none" });
  $('.' + tabName).css({ display: "grid" });

}

document.getElementById("whatsappButton").onclick = function() {
  // Replace '1234567890' with your actual phone number in international format.
  // Replace 'Hello, I need help with an issue!' with your desired pre-filled message.
  window.location.href = "https://wa.me/7994669916?text=Hello,%20I%20need%20help%20with%20an%20issue!";
}



