// Visa/Dölj funktion
function toggleInfo() {
  const info = document.getElementById("extraInfo");

  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

// Slumpmässiga tips
function visaTips() {
  const tipsLista = [
    "Ta en paus och andas lugnt.",
    "Prata med någon du litar på.",
    "Gå ut i naturen en stund.",
    "Andas in 4sekunder, håll luften 4 sekunder och andas ut i 4 sekunder (repetera 3ggr).",
    "Ta en rask promenad utan hörlurar i 15 minuter och fokusera på din omgivning",
    "Ta 2 timmar skärmfri tid där du gör saker för dig själv",
    "Lyssna på musik du tycker om.",
    "Försök få tillräckligt med sömn."
  ];

  const slump = Math.floor(Math.random() * tipsLista.length);
  document.getElementById("tips").textContent = tipsLista[slump];
}