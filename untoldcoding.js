var i = 0;
var txt1 =
  "In english we say .....!  <<         i miss you    but in poetry we say   . <<<                without you there is a ,hollow space inside me that will never be filled...!                                                                           > in english we say I STILL LOVE U < but in poetry we say.  <<                  i cannot find a way to untalglemy heart from yours < in english we say I'M SORRY....! <<                           but in poetry we say , i bleed for the pain i caused you as if your wounds were my own...!                                                     > IN English we say GOOD BYE ...!                     << but in poetry we say : i'll keep you trucked away in my heart...!                                                     > For the rest of my life....! ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
