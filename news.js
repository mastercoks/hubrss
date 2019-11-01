import arrayNews from "./data.js";
import elements from "./elements.js";
import { newsTemplate, principalNewsTemplate, newsCategoryTemplate, imageTemplate } from "./template.js";
import { getQueryString } from "./utils.js";

export default {
  init() {
    elements.get.call(this);
    let firstNews = true;

    for (const news of arrayNews.sort((a, b) => {      
      return a.published > b.published ? -1 : a.published < b.published ? 1 : 0
    })) {
      if (firstNews) {
        this.principalEl.innerHTML = principalNewsTemplate(news);
        firstNews = false;
      } else {
        this.cardsEl.innerHTML += newsTemplate(news);
      }
    }    
  },
  single() {
    elements.get.call(this);
    const news = arrayNews.find((element) => {      
      return element.id == getQueryString().id;
    })
    // this.tituloEl.innerText = news.title;,
    this.tituloEl.innerHTML = news.image ? imageTemplate(news) : `<h1>${news.title}</h1>`;
    this.conteudoEl.innerHTML = news.content;
    console.log(getQueryString().id, news, this.titulolEl);
  },
  listCategory() {
    elements.get.call(this);
    const array = arrayNews.filter((element) => {      
      return element.class == getQueryString().categoria;
    })
    switch (getQueryString().categoria) {
      case "musica":
        this.tituloEl.innerText = 'Música';        
        break;
      case "tech":
        this.tituloEl.innerText = 'Tecnologia e Games';        
        break;
      case "esporte":
        this.tituloEl.innerText = 'Esportes';        
        break;
    
      default:
        break;
    }

    for (const news of array) {      
      this.cardsEl.innerHTML += newsCategoryTemplate(news);
    }
  }
}