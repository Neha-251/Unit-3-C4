



let url = "https://shrouded-earth-23381.herokuapp.com/api/headlines/india";

async function apiCall(url) {

    try{

        let res = await fetch(url);
        let articles = await res.json();

        return articles;
       //console.log(articles);

    }
    catch(error) {
        console.log("error", error);
    }

}

//apiCall(url);
function appendArticles(articles, main) {

    articles.forEach((elem) => {

        let {title} = elem;
        let {content} = elem;
        let {description} = elem;
        let {publishedAt} = elem;
        let {urlToImage} = elem;

        let content_div = document.createElement("div");
        content_div.style.border = "2px solid gold";

        let main_p = document.createElement("div");

        let div_title = document.createElement("p");
        div_title.innerText = title;

        let div_content = document.createElement("p");
        div_content.innerText = content;

        let div_description = document.createElement("p");
        div_description.innerText = description;

        let div_publishedAt = document.createElement("p");
        div_publishedAt.innerText = publishedAt;


        let image = document.createElement('img');
        image.url = urlToImage;
        image.style.height = "200px";
        image.style.width = "400px";

        content_div.addEventListener("click", ()=> {
            localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = "news.html";
        })


        main_p.append(div_title, div_content, div_description, div_publishedAt);
        content_div.append(image, main_p);
        main.append(content_div);

    })

}

export { apiCall, appendArticles }