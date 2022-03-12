let name = document.getElementById("name");
let distance = document.getElementById("distance");
let age = document.getElementById("age");
let genera = document.getElementById("genera");
let annulla = document.getElementById("annulla");
let priceKm = 0.21;
let offerta = document.getElementById("offerta");
let biglietto = document.getElementById("biglietto")



annulla.addEventListener("click",

   function(){
      biglietto.classList.add("d-none")
   }
)
genera.addEventListener("click",

   function () {
     
      document.getElementById("ticketName").innerHTML = name.value;
      let carozza = Math.floor(Math.random() *10 + 1);
      document.getElementById("carozza").innerHTML = carozza ;
      let codiceCp = Math.floor(Math.random() *99999 + 1);
      document.getElementById("codiceCp").innerHTML = codiceCp ;
      biglietto.classList.remove("d-none")
      



      
      

      if( age.value == "minorenne" ){
         document.getElementById("offerta").innerHTML = "Sconto del 20%"
         let price = ((distance.value * priceKm) * 0.8).toFixed(2);
         document.getElementById("ticketPrice").innerHTML = price + "€";

      }else if( age.value == "over65"){
         document.getElementById("offerta").innerHTML = "Sconto del 40%"
         let price = ((distance.value * priceKm) * 0.6).toFixed(2);
         document.getElementById("ticketPrice").innerHTML = price + "€";
      }else{
         document.getElementById("offerta").innerHTML = "Biglietto Standard"
         let price = (distance.value * priceKm).toFixed(2);
         document.getElementById("ticketPrice").innerHTML = price + "€";
      }

      



      

      

   }

);




  