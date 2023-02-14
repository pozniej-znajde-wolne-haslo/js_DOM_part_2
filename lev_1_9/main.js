let colorChoices = document.querySelector('#farbeAuswahlen');
const btn = document.querySelector('#button');

console.log(colorChoices); // target einzelne colors über 'selectedIndex' 

btn.addEventListener('click', (e) => {
  e.preventDefault();

  colorChoices.remove(colorChoices.selectedIndex);
})

// ==== ODER ==== über 'change'
btn.addEventListener('change', (e) => {
  e.preventDefault();

  colorChoices.remove(colorChoices.selectedIndex);
})



/* Schreibe eine Funktion, die beim Anklicken des Buttons die jeweilige 
Farb-Option aus der Liste entfernt.

Verwende den Code aus dem Kommentar.
Verwende:
onClick
selectedIndex
remove()
 */