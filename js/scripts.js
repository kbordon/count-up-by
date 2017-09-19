$(document).ready(function() {
  $("#formCount").submit(function(event) {
    var countToInput = parseInt($("input#countTo").val());
    var countByInput = parseInt($("input#countBy").val());

    if (countByInput >= countToInput) {
      alert("Please make sure your second number is less than your first number!");
    } else if (countByInput <= 0 || countToInput <= 0) {
      alert("Please enter a value greater than zero!")
    } else if (countByInput.isNaN() || countToInput.inNaN()) {
      alert("Please enter a valid number!!!")
    } else {
        for( var index = countByInput; countByInput <= countToInput; countByInput += index){
          $(".output").append(countByInput + " ");
        }
      }


  event.preventDefault();
  });
});
