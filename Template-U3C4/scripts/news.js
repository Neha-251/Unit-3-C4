import sidebar from "../components/sidebar.js";
let sidebar_div = document.getElementById("sidebar");

sidebar_div.innerHTML = sidebar();



let article = localStorage.getItem("article");

article = JSON.parse(article);


let headline = document.getElementById("headline");

let img = document.getElementById("img");

let content_div = document.getElementById("content");

let des_p = document.createElement("p");
let pub_p = document.createElement("p");
let con_p = document.createElement("p");

let {title} = article;
let {urlToImage} = article;
let {description} = article;
let {publishedAt} = article;
let {content} = article;

headline.innerHTML = title;
img.url = urlToImage;
des_p.innerText = description;
pub_p.innerText = publishedAt;
con_p.innerText = content;
content_div.append(des_p, con_p, pub_p);



let search = document.getElementById("searchbar");

search.addEventListener("keyup", (e)=> {
    if(e.keyCode === 13) {
        let search_term = document.getElementById("searchbar").value;
        console.log(search_term);

        localStorage.setItem("search_term", search_term);
        window.location.href = "search.html";
    }
    

})