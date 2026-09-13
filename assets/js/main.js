// Publication filtering + current year.
// The page works without JS: every entry is in the HTML already.

(function () {
  "use strict";

  var buttons = document.querySelectorAll(".filter");
  var entries = document.querySelectorAll(".ledger .entry");
  var empty = document.getElementById("ledgerEmpty");

  function apply(type) {
    var shown = 0;
    entries.forEach(function (entry) {
      var match = type === "all" || entry.dataset.type === type;
      entry.hidden = !match;
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (other) {
        var on = other === button;
        other.classList.toggle("is-on", on);
        other.setAttribute("aria-pressed", on ? "true" : "false");
      });
      apply(button.dataset.filter);
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
