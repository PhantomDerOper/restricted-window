const textEingabe = document.querySelector(".textEingabe");
const variabelCounter = document.querySelector(".variabel");
const limitCounter = document.querySelector(".limit");

textEingabe.addEventListener("input", updateCounter);

function updateCounter() {
  let anzahlAktuell = textEingabe.value.length;

  if (anzahlAktuell > 250) {
    textEingabe.value = textEingabe.value.slice(0, 250);
    anzahlAktuell = 250;
  }

  variabelCounter.textContent = anzahlAktuell;
  const limit = 250;
  limitCounter.textContent = limit;

  if (anzahlAktuell >= 250) {
    textEingabe.style.borderColor = "red";
    variabelCounter.style.color = "red";
    limitCounter.style.color = "red";
  } else {
    textEingabe.style.borderColor = "black";
    variabelCounter.style.color = "black";
    limitCounter.style.color = "black";
  }
}
