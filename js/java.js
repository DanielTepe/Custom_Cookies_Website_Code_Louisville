
/* function for form section: creates order estimate based on quantity, price and whether shipping is needed */
function orderEstimate (){
  var quantity = document.getElementById('order-quantity').value;
  var price = 3;
  var estimateCalculator = quantity * price;
  var hide = document.getElementsByClassName('hide');
  var shipping = document.getElementById('shipping').value;
    /* if clause that adds $10 to order estimate field if 'yes' is selected. Removes address fields if shipping is 'no' as those
    aren't necessary fields without shipping. Loops through elements to hide/display based on shipping selection. */
    if (shipping === 'yes') {
      var estimateCalculator = estimateCalculator + 10;
      for(var i=0; i<hide.length; i++) {
        hide[i].style.display = 'block';
      }
    } else if (shipping ==='no') {
        for(var i=0; i<hide.length; i++) {
        hide[i].style.display = 'none';
    }
  }
    document.getElementById('order-estimate').value = "Your order estimate is $" + estimateCalculator;
}


/* submit button click function that checks if some of the form fields are complete. If not,
an alert message displays when the submit button is clicked communicating which field is empty. */

  $('#submit').click(function(){
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var phoneField = document.getElementById('phone');
    var commentField = document.getElementById('comments');
      if (nameField.value === "") {
          alert("Please provide your name.");
          return false;
        } else if (emailField.value === "") {
            alert("Please provide your email address.");
            return false;
        } else if (phoneField.value === "") {
            alert("Please provide your phone number.");
            return false;
        } else if (commentField.value === ""){
            alert("Please enter information for your order");
            return false;
        } else {
            alert("Thank you for your order, " + nameField.value + "!");
            return true;
        }
    });
