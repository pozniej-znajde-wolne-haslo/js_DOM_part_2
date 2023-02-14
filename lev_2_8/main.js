const userInput = document.querySelector("#userinput");
const shoppingList = document.querySelector("ul");
const btn = document.querySelector("#enter");


btn.addEventListener('click', () => {
  const newItem = document.createElement("li");
  newItem.innerHTML = userInput.value;
  shoppingList.appendChild(newItem);
})




/* Schreibe eine Funktion, die beim Anklicken des Buttons ein neues Listenelement erstellt.
Der HTML und CSS Code befindet sich im Kommentar.
Nutze
querySelector()
addEventListener()
createElement()
createTextNode()
appendChild()

Bonus: Beim Betätigen der ENTER-Taste wird ebenfalls ein Listenelement erstellt.
Suche nach keycode.
 */