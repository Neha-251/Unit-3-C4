import sidebar from "../components/sidebar.js";
let sidebar_div = document.getElementById("sidebar");

sidebar_div.innerHTML = sidebar();


const getData = async () => {

    try{


        let response = await fetch("https://shrouded-earth-23381.herokuapp.com/api/headlines/india");

        let data = await response.json();

        console.log("data", data);

        appendData(data);

    }

    catch(error) {
        console.log("error", error);
    }
}

getData();

const appendData = (data) => {

    let main = document.getElementById("main");
    data.forEach((elem) => {

        
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

        let img = document.createElement("img");
        img.url = urlToImage;
        img.style.height = "200px";

        main_p.append(div_title, div_content, div_description, div_publishedAt);
        content_div.append(img, main_p);

        content_div.addEventListener("click", ()=> {
            localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = "news.html";
        })

        main.append(content_div);

    
    })
}

let search = document.getElementById("searchbar");

search.addEventListener("keyup", (e)=> {
    if(e.keyCode === 13) {
        let search_term = document.getElementById("searchbar").value;
        console.log(search_term);

        localStorage.setItem("search_term", search_term);
        window.location.href = "search.html";
    }
    

})
