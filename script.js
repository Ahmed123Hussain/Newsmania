const date = new Date();

const d = document.querySelector(".date");
d.innerHTML = date.toDateString();




document.addEventListener("DOMContentLoaded", function() {
  // Function to fetch news articles and display them in the container
  const fetchNews = async (url, container) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Clear existing content in the container
      container.innerHTML = "";

      // Loop through articles and create elements for each article
      data.articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("news-item");

        // Title of the article
        const title = document.createElement("h4");
        title.textContent = article.title;
        articleElement.appendChild(title);

        // Description of the article
        const description = document.createElement("p");
        description.textContent = article.description;
        articleElement.appendChild(description);

        // Link to the full article
        const link = document.createElement("a");
        link.href = article.url;
        link.textContent = "Read more";
        link.target = "_blank"; // Open link in a new tab
        articleElement.appendChild(link);

        // Append the article to the container
        container.appendChild(articleElement);
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // URLs for different news sources using the News API
  const newsAPIKey = "4850f5bb9f234f3d898687e571907e6f"; // Replace with your actual News API key

  const toisAPI = `https://newsapi.org/v2/everything?q=Times+of+Israel&apiKey=${newsAPIKey}`;
  const toisContainer = document.querySelector(".tois");
  fetchNews(toisAPI, toisContainer);

  const toinAPI = `https://newsapi.org/v2/everything?q=Times+of+India&apiKey=${newsAPIKey}`;
  const toinContainer = document.querySelector(".toin");
  fetchNews(toinAPI, toinContainer);

  const arabnAPI = `https://newsapi.org/v2/everything?q=Arab+News&apiKey=${newsAPIKey}`;
  const arabnContainer = document.querySelector(".arabn");
  fetchNews(arabnAPI, arabnContainer);

  const siasatAPI = `https://newsapi.org/v2/everything?q=Siasat&apiKey=${newsAPIKey}`;
  const siasatContainer = document.querySelector(".siasat");
  fetchNews(siasatAPI, siasatContainer);
});
