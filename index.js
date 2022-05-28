function getData() {
  fetch(
    "https://cdn.contentful.com/spaces/i1ddhx0pblbm/environments/master/entries?access_token=T-XgtWmb_WCUA6thy0W8xmSlteoCV7g4P9aJxK4DFNE"
  )
    .then((response) => response.json())
    .then((data) => loadData(data));
}

function loadData(data) {
  const myData = data.items;
  var myContenedorEl = document.querySelector(".work-contenedor");
  var myTemplateEl = document.querySelector("#work-template");
  for (let i = 0; i < myData.length; i++) {
    var clone = myTemplateEl.content.cloneNode(true);
    var titleEl = (clone.querySelector(".work-title").textContent =
      myData[i].fields.title);
    var descriptionEl = (clone.querySelector(".work-description").textContent =
      myData[i].fields.description.content[0].content[0].value);
    var urlEl = (clone.querySelector(".work-link").href = myData[i].fields.url);
    var imgEl = (clone.querySelector(".work-img-preview").src =
      data.includes.Asset[i].fields.file.url);
    myContenedorEl.appendChild(clone);
  }
}

function main() {
  getData();
}

main();
