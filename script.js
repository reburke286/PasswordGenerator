var button = document.querySelector('#generate');
var textArea = document.querySelector('#exampleFormControlTextarea1');
var copyToClipboardBtn = document.querySelector('#copyToClipboardBtn');
let howLong = '';
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function copyClipboard(){
  var el = document.createElement('textarea');
  document.body.appendChild(el);
  el.select(); 
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Copied the text: " + textArea.copyText.value);
};

button.addEventListener('click', function(){
    while (!(howLong >=8 && howLong <=128)) {
     var howLong = prompt('How long would you like your password? Please pick a number between 8 and 128.') 
    };
    console.log(howLong); //value from prompt
    
    var shouldHaveSpecialCharacters = confirm('Would you like to use special characters?');
    console.log(shouldHaveSpecialCharacters);  //true or false
    var shouldBeUppercase = confirm('Would you like to use upper case characters?');
    console.log(shouldBeUppercase); //true or false
    var shouldBeLowerCase = confirm('Would you like to use lower case characters?');
    console.log(shouldBeLowerCase); //true or false
    var shouldHaveNumbers = confirm('Would you you to use numbers?');
    console.log(shouldHaveNumbers); //true or false

    var allPossibleCharacters = '';
    if (shouldHaveSpecialCharacters) {
      allPossibleCharacters = allPossibleCharacters + specialChar; 
    } //will add specialChar to string if true
    if (shouldBeUppercase) {
      allPossibleCharacters = allPossibleCharacters + upperCaseChar;
    } //will add upperCaseChar to string if true
    if (shouldBeLowerCase) {
     allPossibleCharacters = allPossibleCharacters + lowerCaseChar;
    } //will add lowerCaseChar to string if true
    if (shouldHaveNumbers) {
      allPossibleCharacters = allPossibleCharacters + numChar;
    } //will add numChar to string if true
    else {
      alert('Please choose at least one type of character for your password')
    };
      for (i = 0; i < howLong; i++) {
      var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
      var randomChar = allPossibleCharacters[randomIndex];
      var password = password + randomChar;
      console.log(password);
      document.createElement("textarea").value = password; 
    } 
  
});

copyToClipboardBtn.addEventListener('click', copyClipboard(textArea));

  
