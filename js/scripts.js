
// // business logic
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#sentence").val()).split(" ");
    
    console.log(sentence);
    // var year = parseInt($("input#sentence").val());
    // var result = leapYear(year);

    $("#result").text(sentence);
    //
    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    // $("#result").show();
  });
});
