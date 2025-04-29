document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kapcsolatForm");

  form.addEventListener("submit", function (event) {
    let hiba = "";

    const nev = document.getElementById("nev").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const keres = document.getElementById("keres").value.trim();
    const kinal = document.getElementById("kinal").value.trim();

    // Kötelező mezők ellenőrzése és minimum hossz
    if (nev === "") hiba += "A név megadása kötelező.\n";
    if (!email.match(/^\S+@\S+\.\S+$/)) hiba += "Az email cím nem érvényes.\n";
    if (telefon.length < 10) hiba += "A telefonszám legalább 10 karakter legyen.\n";
    if (keres.length < 10) hiba += "A keresett könyv mező legalább 10 karakter legyen.\n";
    if (kinal.length < 10) hiba += "A kínált könyv mező legalább 10 karakter legyen.\n";

    if (hiba !== "") {
      alert("Hibák az űrlapban:\n" + hiba);
      event.preventDefault();
    }
  });
});
