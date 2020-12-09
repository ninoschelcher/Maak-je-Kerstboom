/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Selectoren voor de knoppen en de versieringen
const boomKnoppies = document.querySelectorAll(".boombutton");
const boomVersieringen = document.querySelectorAll(".versiering");

//Eventlisteners voor knoppen
[...boomKnoppies].forEach(knop => {
  knop.addEventListener('click', function zetVersieringen() {
    const imgId = this.dataset.id;
    const split = imgId.split("-");

    [...boomVersieringen].forEach(versiering => {
      if (versiering.id.includes(split[0])) {
        versiering.classList.remove("aan");
      }
    })

    if (split[1] != "geen") {
      document.querySelector("#" + imgId).classList.add("aan");
    }
  });
})

// Selectoren voor de afronding van de boom //
const boomAfrondingsFormulier = document.querySelector("#boomAfrondFormulier");
const jouwNaamTekst = document.querySelector("#jouwboom");
const doosAfbeelding = document.querySelector("#doos");

//Functie om het formulier te verwerken en de doos om de boom te doen//
const boomAfronden = (event) => {
  event.preventDefault();
  const naamTekst = boomAfrondingsFormulier.naam.value;

  jouwNaamTekst.innerHTML = naamTekst + "\'s Boom ";
  doosAfbeelding.classList.add("aan");
}

boomAfrondingsFormulier.addEventListener("submit", boomAfronden);
