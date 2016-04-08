function Pizza (size, sauce, meat, veggies) {
  this.size = size
  this.sauce = sauce
  this.meat = meat
  this.veggies = veggies
}
Pizza.prototype.calculatePrice = function () {
  var price = 0

  switch (this.size) {

    case "Personal":
      price = 5
      break;
    case "Small":
      price = 10
      break;
    case "Medium":
      price = 13
      break;
    case "Large":
      price = 15
      break;
  }
  if (this.sauce === "Pesto" || this.sauce === "BBQ") {
    price += 1
  }
  if (this.meat === "MeatBalls" || this.meat === "Bacon" || this.meat === "Salami") {
    price += 1
  }
  if (this.veggies === "Jalapenos" || this.veggies === "Bannana Peppers") {
    price += 1
  }
  return price;
}
Pizza.prototype.displayPizza = function () {
  return "Your Pizza: " + "<br>" + "<br>" + "Size: " + this.size + "<br>" + "Sauce: " + this.sauce + "<br>" + "Meat: " + this.meat + "<br>" + "Veggies: " + this.veggies
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val()
    var inputtedSauce = $("#sauce").val()
    var inputtedMeat = $("#meat").val()
    var inputtedVeggies = $("#veggies").val()

    if (inputtedSize === null || inputtedSauce === null || inputtedMeat === null || inputtedVeggies === null) {
      alert("Please enter a size and some toppings to order a pizza.")
    } else {
      var newPizza = new Pizza (inputtedSize, inputtedSauce, inputtedMeat, inputtedVeggies);
      var pizzaPrice = newPizza.calculatePrice();


      $("#results").prepend("<h3 id='pizzaResults'>" + newPizza.displayPizza() + "<br>" + "<br>" + "Price: $" + pizzaPrice + ".00" + "</h3>");
      $(".pizza").show();
      $("#orderForm").hide();

    }
  })

  $(".orderBtn").click(function(event) {
    event.preventDefault();

    $("#orderForm").show();
    $(".welcome").hide();
  })

  $(".restart").click(function(event) {
    event.preventDefault();

    $("#results").empty();
    $(".pizza").hide();
    $("#orderForm").show();

    $("#size").val("")
    $("#sauce").val("")
    $("#meat").val("")
    $("#veggies").val("")


});

});
