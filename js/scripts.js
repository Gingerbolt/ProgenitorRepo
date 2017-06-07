
// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#sentence").val()).toUpperCase().split(" ");
      $("#result").empty();
      $("#warning").empty();
      $("#result").show();
// // business logic
    var sentence2 = sentence.map(function(wordbit) {
      for (x = 0; x <= wordbit.length; x += 1) {
      if (wordbit.charAt(x) !== "A" && wordbit.charAt(x) !== "B" && wordbit.charAt(x) !== "C" && wordbit.charAt(x) !== "D" && wordbit.charAt(x) !== "E" && wordbit.charAt(x) !== "F" && wordbit.charAt(x) !== "G" && wordbit.charAt(x) !== "H" && wordbit.charAt(x) !== "I" && wordbit.charAt(x) !== "J" && wordbit.charAt(x) !== "K" && wordbit.charAt(x) !== "L" && wordbit.charAt(x) !== "M" && wordbit.charAt(x) !== "N" && wordbit.charAt(x) !== "O" && wordbit.charAt(x) !== "P" && wordbit.charAt(x) !== "Q" && wordbit.charAt(x) !== "R" && wordbit.charAt(x) !== "S" && wordbit.charAt(x) !== "T" && wordbit.charAt(x) !== "U" && wordbit.charAt(x) !== "V" && wordbit.charAt(x) !== "W" && wordbit.charAt(x) !== "X" && wordbit.charAt(x) !== "Y" && wordbit.charAt(x) !== "Z"){
        $("#warning").text("PLEASE REMOVE SYMBOLS AND NUMBERS");
        $("#result").hide();
      } else {
        return wordbit
      }
    }
    });


    sentence2.forEach(function(word){

      if (word.charAt(0) === "A" || word.charAt(0) === "E" || word.charAt(0) === "I" || word.charAt(0) === "O" || word.charAt(0) === "U") {
        $("#result").append(word + "way ");

      } else if ((word.charAt(0) === "Q") && (word.charAt(1) === "U")) {
        var secondletter = word.slice(0, 2);
        var secondrest = word.slice(2, word.length);
        $("#result").append(secondrest);
        $("#result").append(secondletter);
        $("#result").append("ay ");
      } else if ((word.charAt(1) === "Q") && (word.charAt(2))) {
        var qletter = word.slice(0, 3);
        var qrest = word.slice(3, word.length);
        $("#result").append(qrest);
        $("#result").append(qletter);
        $("#result").append("ay ");
      } else if ((word.charAt(0) !== "A" || word.charAt(0) !== "E" || word.charAt(0) !== "I" || word.charAt(0) !== "O" || word.charAt(0) !== "U") && (word.charAt(1) === "A" || word.charAt(1) === "E" || word.charAt(1) === "I" || word.charAt(1) === "O" || word.charAt(1) === "U")) {
        var firstletter = word.slice(0, 1);
        var firstrest = word.slice(1, word.length);
        $("#result").append(firstrest);
        $("#result").append(firstletter);
        $("#result").append("ay ");
      } else if ((word.charAt(0) !== "A" || word.charAt(0) !== "E" || word.charAt(0) !== "I" || word.charAt(0) !== "O" || word.charAt(0) !== "U") && (word.charAt(1) !== "A" || word.charAt(1) !== "E" || word.charAt(1) !== "I" || word.charAt(1) !== "O" || word.charAt(1) !== "U"))  {
        var secondletter = word.slice(0, 2);
        var secondrest = word.slice(2, word.length);
        $("#result").append(secondrest);
        $("#result").append(secondletter);
        $("#result").append("ay ");
      }
    });
  });
});
