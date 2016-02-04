'use strict';

function showMobile () {
  var contactUsFooterMobile = document.getElementsByClassName('contactUsFooterMobile');
  var contactUsFooter = document.getElementsByClassName('contactUsFooter');
  var laReserveLogo = document.getElementsByClassName('laReserveLogo');
  var laReserveLogoMobile = document.getElementsByClassName('laReserveLogoMobile');
  var windowWidth = window.innerWidth;

  if (windowWidth > 975) {
    for (var i = 0; i < contactUsFooterMobile.length; i++) {
      contactUsFooterMobile[i].style.display = 'none';
    }
    for (var i = 0; i < contactUsFooter.length; i++) {
      contactUsFooter[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogo.length; i++) {
      laReserveLogo[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'none';
    }
  }

  if (windowWidth <= 975) {
    for (var i = 0; i < contactUsFooter.length; i++) {
      contactUsFooter[i].style.display = 'none';
    }
    for (var i = 0; i < contactUsFooterMobile.length; i++) {
      contactUsFooterMobile[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogo.length; i++) {
      laReserveLogo[i].style.display = 'none';
    }
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'inline';
    }
  }
}

showMobile();
window.onresize = function () {showMobile()};