$(document).ready(function(){

  $("form#factorial_calculator").submit(function(event){
    $("#factorial_result").show();
    var number = $("input#input_number").val();


    $('#factorial_result').append("<b>" + number +"!=" + getfactorial(number) + "<b><br>");
    event.preventDefault();
  });


  $("form#palindromes_form").submit(function(event){
    $("#palindromes_result").show();
    var word = $("input#input_string").val();
isPalindromes(word);

    $('#palindromes_result').append("<b>Words to check: " + word + " and " + isPalindromes(word) + "<b><br>");
    $('#palindromes_result').append(word.toLowerCase() == isPalindromes(word).toLowerCase() ? "The word " + word + " is a palindrome<br>" : "The word " + word + " is not a palindrome"+ "<br>");
    event.preventDefault();
  });
});

function getfactorial(number) {
  var result = 1;
  if (number != 0) {
    for (var i = 1; i <= number; i++) {
      result *=i;
    }
  }
  return result;
}

function isPalindromes(sentence) {
  var reverse_word = "";
  var characters = sentence.split("");

  if(sentence.includes(" ")) {
    sentence = sentence.replace(" ", "");
  }


console.log(sentence);
  for (var i = characters.length-1; i >= 0; i--) {
    reverse_word += characters[i];
    console.log(i + "    "  + characters[i]);
  }

  console.log(reverse_word);
  return reverse_word;
}
