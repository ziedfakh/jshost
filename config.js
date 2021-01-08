var token, userId;
var options = []

// so we don't have to write this out everytime 
const twitch = window.Twitch.ext;

//twitch.configuration.set("global","1",JSON.stringify({"test": "fully"}) )

// onContext callback called when context of an extension is fired 
twitch.onContext((context) => {
  //console.log(context);

});


// onAuthorized callback called each time JWT is fired
twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token; //JWT passed to backend for authentication 
  userId = auth.userId; //opaque userID 
  //twitch.configuration.set("global","1",JSON.stringify({"test": "fully"}) )
});


function updateConfig(){

  twitch.configuration.set("broadcaster", "1", JSON.stringify(options))
  var strings= (twitch.configuration.global.content)
  twitch.rig.log(options)
  twitch.rig.log('yo')

}

// Function to save the streamer's WYR options  
$(function(){
  $("#form").submit(function(e){
    options = []
    $('input[type=checkbox]').each(function () {
      if (this.checked) {
        var option = $(this).val();
        //console.log(typeof option)
        //console.log(options.push(value))
        options.push(option)
      }
    })
    //console.log(options)
    //updateOptions()
    e.preventDefault()
    //console.log(options)
  })  
})
