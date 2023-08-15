// nothing there yet
window.addEventListener('DOMContentLoaded', function() {

  Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
  }

  var languages = ["en", "fr", "zh"];
  var language = window.navigator.userLanguage || window.navigator.language;

  if (language != undefined) {
    if (language.indexOf('-') > -1) {
      language = language.substr(0,language.indexOf('-'));
    }
    if (!languages.contains(language)) {
      language = 'en';
    }
    var here = window.location.href;
    here = here.substr(here.lastIndexOf('/')+1);
    if ((here == 'index.html' || here == '') && language != 'en') {
      window.location.href = "index."+language+".html";
    }
  }

});