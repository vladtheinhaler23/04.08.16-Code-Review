$(".deliveryBtn").click(function(event) {
  event.preventDefault();

  $("#deliveryAddress").append('<form>' + '<div class="new-address">' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                 '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-state">State</label>' +
                                 '<input type="text" class="form-control new-state">' +
                               '</div>' +
                             '</div>' + '<button type="submit" id="orderDeliveryButton">ORDER DELIVERY</button>' + '</form>')

})

$("form#orderDeliveryButton").submit(function(event) {
  event.preventDefault();

  var inputtedStreet = $(".new-street").val();
  var inputtedCity = $(".new-city").val();
  var inputtedState = $(".new-state").val();

  var newAddress = new Delivery(inputtedStreet, inputtedCity, inputtedState);

  console.log(inputtedStreet);

})
Pizza.prototype.delivery = function (street, city, state){
  this.street = street
  this.city = city
  this.state = state
  return "Delivery to: " + "<br>" + "<br>" + this.street + "<br>" + this.city + "<br>" + this.state
}
