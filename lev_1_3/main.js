const myList = document.querySelector("#myList");
const btnsContainer = document.querySelector(".unten");
const output = document.querySelector("output");

// 1st btn - 'firstElemChild'
btnsContainer.firstElementChild.addEventListener('click', () => {
  output.innerHTML = myList.firstElementChild.innerHTML;
})

//==== ODER ==== zugriff auf alle children - als 'iterable':
const btns = btnsContainer.children;
// btns = index 0, 2, 4, 6 (<br> werden auch mitgezählt)


// 2nd btn - to get the 'lastElementChild'
btns[2].addEventListener('click', () => {
  output.innerHTML = myList.lastElementChild.innerHTML;
})

// 3rd btn 
btns[4].addEventListener('click', () => {
  output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
})


// 4th btn
btns[6].addEventListener('click', () => {
  output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML;
})


/* 
Schreibe eine Funktion, die beim Anklicken der Buttons das first- oder last-ElementChild anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
Den HTML- und CSS-Code findest du im Kommentarbereich.
Nutze
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
innerHTML
querySelectorAll
querySelector
addEventListener
 */