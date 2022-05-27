function main() {
  function assignImg(template) {
    fetch(
      "https://cdn.contentful.com/spaces/i1ddhx0pblbm/environments/master/assets?access_token=T-XgtWmb_WCUA6thy0W8xmSlteoCV7g4P9aJxK4DFNE"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const element of data.items) {
          var myImgEl = (template.querySelector(".work-img-preview").src =
            element.fields.file.url);
        }
      });
  }

  function loadData(data) {
    var myContenedorEl = document.querySelector(".work-contenedor");
    var myTemplateEl = document.querySelector("#work-template");

    for (const element of data.items) {
      var clone = myTemplateEl.content.cloneNode(true);

      var titleEl = (clone.querySelector(".work-title").textContent =
        element.fields.title);
      var descriptcionEl = (clone.querySelector(
        ".work-description"
      ).textContent = element.fields.description.content[0].content[0].value);
      assignImg(clone);
      console.log(clone);
    }
  }

  function getData() {
    fetch(
      "https://cdn.contentful.com/spaces/i1ddhx0pblbm/environments/master/entries?access_token=T-XgtWmb_WCUA6thy0W8xmSlteoCV7g4P9aJxK4DFNE"
    )
      .then((response) => response.json())
      .then((data) => loadData(data));
  }
  getData();
}

main();
