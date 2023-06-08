const amountElement = document.getElementById("amount")
paypal.Buttons ({
 style: {
      layout:  'vertical',
      color:   'gold',
      shape:   'rect',
      label:   'paypal',
      layout: 'vertical'
 },
 createOrder: function(data, actions) {
  return actions.order.create({ 
   purchase_units: [ {
    amount: {
       value: amountElement.value,
    }
   }]
  });
 },
 onApprove: function(data, actions) {
  return actions.order.capture().then(function(details) {
   alert("Transaction completed by" + details.payer.name.given_name)
   ;
  });
 }

}).render('#paypal')