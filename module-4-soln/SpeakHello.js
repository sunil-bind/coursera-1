(function(WINDOW){
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak= function (name) {
  console.log(speakWord + " " + name);
}
 WINDOW.helloSpeaker=helloSpeaker;
})(window);