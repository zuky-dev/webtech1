import { log } from "util";



function incrementEntry() {
  var counter = getCookieAttr("counter");
  console.log(counter);
  if(counter == "") {
    setCookieAttr("counter", 1);
  } else {
    counter++;
    setCookieAttr("counter", counter);
  }
}

function setCookieAttr(attr, value) {
  var d = new Date();
  d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60 * 1000)); //10 years
  var expires = "expires="+d.toUTCString();
  var req = attr + "=" + value + ";" + expires + ";path=/";
  document.cookie = req;
}

function getCookieAttr(attr) {
  var name = attr + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}