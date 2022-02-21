function storeSearchterm(term) {


}

//export default storeSearchterm




import { apiCall, appendArticles } from "../scripts/main.js";

let search_term = localStorage.getItem("search_term");

let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${search_term}`;
let res = await apiCall(url);

console.log(res);

let main = document.getElementById("main");

appendArticles(res, main);

