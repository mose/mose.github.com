// nothing there yet
window.addEventListener('DOMContentLoaded', function() {

  var languages = ["en", "fr", "zh"];
  var language = window.navigator.userLanguage || window.navigator.language;
  var userlang = window.location.hash;
  var openlink = document.getElementById("open");
  var closelink = document.getElementById("close");
  var body = document.getElementById("body");

  if (userlang === "#d") {
    removeClass(body,"full");
  } else {
    if (language != undefined) {
      if (language.indexOf('-') > -1) {
        language = language.substr(0,language.indexOf('-'));
      }
      if (languages.indexOf(language) == -1) {
        language = 'en';
      }
      var here = window.location.href;
      here = here.substr(here.lastIndexOf('/')+1);
      if ((here == 'index.html' || here == '') && language != 'en') {
        window.location.href = "index-"+language+".html";
      }
    }

    addEvent(openlink, 'click', function(e) {
      e.preventDefault();
      removeClass(body,"full");
    });
    addEvent(closelink, 'click', function(e) {
      addClass(body,"full");
    });
  }

});