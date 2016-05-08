$(document).ready(function () {
  $('#calculate').click(function () {
    var number = parseFloat($('#input').val());
    console.log(number)
    var FizzBuzz = function (number)
      for (var i=1; i<=number; i++)
      {
          if (i % 15 == 0)
              console.log("FizzBuzz");
              window.alert("FizzBuzz");
          else if (i % 5 == 0)
              console.log("Buzz");
              window.alert("Buzz");
          else if (i % 3 == 0)
              console.log("Fizz");
              window.alert("Fizz");
          else
              console.log(i);
              window.alert(" + i +");
      }
  });
});
