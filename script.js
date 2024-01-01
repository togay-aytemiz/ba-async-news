const newsContainer = document.querySelector(".news-container");
const getNewsBtn = document.querySelector("#search-btn");

let url =
  "https://newsapi.org/v2/top-headlines?country=tr&apiKey=495aaf31989c40ab937416e2e8c458e9";

const showNews = function (data) {
  for (let i = 0; i < 20; i++) {
    const html = `<a href="${data.articles[i].url}">${data.articles[i].title}</a>`;
    newsContainer.insertAdjacentHTML("beforeend", html);
  }
};

const getNewsData = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles[1]);
      showNews(data);
    });
};

getNewsData();
