// Variable //
const shipName = "Falcon X";      // Name & Raumschif //
let health = 500;           // Leben & Panzerung //
let money = 100;            // Geld // Wärhrung //
let repairKits = 8;           // Reparatursets //


// Status anzeige //
function showstatus () {
    console.log("Raumschiff:", shipName);
    console.log("Leben", health);
    console.log("Geld", money);
    console.log("Reparatursets",repairKits);
    

}

// Schaden nehmen //

function takeDamage(amount) {

    if ( amount >= health ){ 
        health = 0;
        console.log ("ich bin game over ") }
      else { health = health - amount 
        console.log ("habe überlebet")
     }
        
    }



// Reparatursets Kaufen // 

function repairKitsBuy(amount) {
    
    if ( (money >= amount ) && ( health > 0 )) {        // habe ich genug geld und bin am Leben 
        repairKits += amount;                           // Reparatursets werden mehr
        money -= amount;                                // Geld wird weniger

        console.log("Kauf erfolgreich")                 // Meldung bei Erfolg
        
    } else { 
        console.log("Game Over oder No Money ");              // Fehlermeldung 

    }
}




// Reparatursets Benutzen //

function userepairKits(amount){

    if ( (repairKits >= amount) && ( health > 0 )){   // bin am Leben und habe genug Reparatursets 
        repairKits -= amount;                           // sets werden weniger 
        health += amount;                                // Leben wird mehr 

        console.log("Repariert");
    } else {
        console.log("Nicht genug Reparatursets oder Game Over")
    }
}







showstatus();
takeDamage(600);
showstatus()

showstatus();
repairKitsBuy(90);
showstatus();

showstatus();
userepairKits(12);
showstatus();




