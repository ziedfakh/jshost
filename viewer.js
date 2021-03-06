var token = "";
var tuid = "";

var twitch = window.Twitch.ext;

function setAuth(token) {
  Object.keys(requests).forEach((req) => {
      twitch.rig.log('Setting auth headers');
      requests[req].headers = { 'Authorization': 'Bearer ' + token }
  });
}

twitch.onContext(function(context) {
  twitch.rig.log(context);
});

twitch.onAuthorized(function(auth) {
  // save our credentials
  token = auth.token;
  tuid = auth.userId;

  // enable the button
  $('#cycle').removeAttr('disabled');

  setAuth(token);
});

function updateBlock(hex) {
    $('#color').css('background-color', hex);
}

function getRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

twitch.configuration.onChanged(function(context){
  twitch.rig.log("strings")
  twitch.rig.log(twitch.configuration.global.content)

  var strings= JSON.parse(twitch.configuration.global.content)
  twitch.rig.log(strings)  
  twitch.rig.log(strings["bb"] )  
  document.getElementById("testid").innerHTML = twitch.configuration.global.content;


});

$(function() {
    $('#cycle').prop('disabled', false);
    
    $('#cycle').click(function() {

      var strings= (twitch.configuration.global.content)
      twitch.rig.log(strings)

      twitch.rig.log('hi')
      updateBlock(getRandomColor());
    });
});
