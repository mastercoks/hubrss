const newsTemplate = (news) => {
  let html = ''
  html += `<div class="col-md-4"><div class="card">`;
  html +=   news.image ? `<div class="card-img-top" style="background-image: url(${news.image})"></div>` : ``;
  html +=  `<div class="card-body">
            <strong class="d-inline-block mb-2 ${news.class}">${news.category}</strong>
            <a href="/noticia/?id=${news.id}" class="stretched-link ${news.class}"><h3 class="mb-0">${news.title}</h3></a>
          </div></div></div>`;
  return html;
}

const newsCategoryTemplate = (news) => {
  let html = ''
  html += `<div class="col-md-12 row">`;
  html +=   news.image ? `<div class="col-md-4"><img src="${news.image}" alt="Imagem"></div><div class="card-body col-md-8">` : `<div class="card-body">`;
  html +=  `<strong class="d-inline-block mb-2 ${news.class}">${news.author.name}</strong>
            <a href="/noticia/?id=${news.id}" class="stretched-link ${news.class}"><h3 class="mb-0">${news.title}</h3></a>
          </div></div>`;
  return html;
}

const principalNewsTemplate = (news) => {
  return `
      <div class="card jumbotron p-4 p-md-5" style="height:700px; background-image: url(${news.image})">
        <div class="card-body">
        <div class="card-body centered">
          <a href="/noticia/?id=${news.id}" class="stretched-link"><h1 class="text-white display-4 font-italic">${news.title}</h1></a>
        </div>
      </div>`;
}

const imageTemplate = (news) => {
  return `
        <div class="container-image">
          <img src="${news.image}" alt="Imagem">
          <div class="card-body centered">
          <h1 class="text-white font-italic">${news.title}</h1>
        </div>
      </div>`;
}

export { newsTemplate, principalNewsTemplate, newsCategoryTemplate, imageTemplate };