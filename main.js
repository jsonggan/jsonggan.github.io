"use strict";

function decrease_number() {
  let current_value = document.getElementById("number_button").innerHTML;
  let new_value = current_value - 1;
  if (new_value >= 0) {
    document.getElementById("number_button").innerHTML = new_value;
  }
}
