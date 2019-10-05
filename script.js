var button = document.querySelector('#generate');
button.addEventListener('click', function(){
   // var howLong = prompt('How long would you like your password? Please pick a number between 8 and 128.');
    //console.log(howLong);
    var howLong = null
   
    while (!(howLong >=8 && howLong <=128)) {
      howLong = prompt('How long would you like your password? Please pick a number between 8 and 128.') 
    };
    console.log(howLong);
    
    var userSpecChar = confirm('Would you like to use special characters?');
    console.log(userSpecChar);     
})

var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(']



