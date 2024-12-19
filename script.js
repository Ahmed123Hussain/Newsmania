const date = new Date();

const d = document.querySelector(".date");
d.innerHTML = date.toDateString();




document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "4850f5bb9f234f3d898687e571907e6f"; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=${apiKey}`;

    // Fetch the latest news headline
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                // Display the first headline
                const headline = data.articles[0].title;
                document.getElementById('headline').innerText = headline;
            } else {
                document.getElementById('headline').innerText = "No news found!";
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            document.getElementById('headline').innerText = "Error fetching news.";
        });
});
