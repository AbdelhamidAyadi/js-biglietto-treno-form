let name = document.getElementById("name");
let distance = document.getElementById("distance");
let age = document.getElementById("age");
let genera = document.getElementById("genera")
let priceKm = 0.21;
let price = parseFloat(distance * priceKm).toFixed(2);

if (document.getElementById("age").value === "minorenne") {
   price = parseFloat((distance * priceKm) * 0.8);
} else if (document.getElementById("age").value === "over65") {
   price = parseFloat((distance * priceKm) * 0.6);
} else {
   price = parseFloat(distance * priceKm).toFixed(2);
};


genera.addEventListener("click",

   function () {
      document.getElementById("ticketName").innerHTML = name.value;
      document.getElementById("ticketPrice").innerHTML = price.value;
      

   }

);




  