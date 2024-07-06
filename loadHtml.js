function loadHtml(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
  // .catch((error) => console.error("Error loading HTML:", error));
}

// Load the header HTML into the div with id "header"
loadHtml("header", "header.html");
