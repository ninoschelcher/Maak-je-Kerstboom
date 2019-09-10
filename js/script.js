/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



//Selectoren voor de knoppen en de versieringen
var boomKnoppies = document.querySelectorAll(".boombutton");
var boomVersieringen = document.querySelectorAll(".versiering");

//Functie om versieringen te zetten
function zetVersieringen() {

  //Splitten van boom id, waar het streepje zit wordt de array gescheden, voor het streepje en na het streepje //
  var imgId = this.dataset.id;
  var split = imgId.split("-");

  var i;
  for (i in [...boomVersieringen]) {
    //Pakken van het woord piek, 0=piek, 1=kleur, als de forloop een id ziet, haalt hij de class eraf zodat de afbeeldingen.
    // Niet over elkaar heen hangen en niet weg gaan.
    if (boomVersieringen[i].id.includes(split[0])) {
      boomVersieringen[i].classList.remove("aan");
    }
  }
  //Vervolgens word de class "aan" meegegeven om de afbeelding te tonen zonder dat ze over elkaar heen hangen.
  if (split[1] != "geen") {
    document.querySelector("#" + imgId).classList.add("aan");
  }
}

var i;
for (i in [...boomKnoppies]) {
  boomKnoppies[i].addEventListener("click", zetVersieringen);
}





// Selectoren voor de afronding van de boom //
var boomAfrondingsFormulier = document.querySelector("#boomAfrondFormulier");
var jouwNaamTekst = document.querySelector("#jouwboom");
var doosAfbeelding = document.querySelector("#doos");

//Functie om het formulier te verwerken en de doos om de boom te doen//
function boomAfronden(event) {
  var naamTekst = boomAfrondingsFormulier.naam.value;
  event.preventDefault();

  jouwNaamTekst.innerHTML = naamTekst + "\'s Boom ";
  doosAfbeelding.classList.add("aan");
}

boomAfrondingsFormulier.addEventListener("submit", boomAfronden);
