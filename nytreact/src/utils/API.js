import axios from "axios";
const key = "&api-key=fad1326522014fad968eb8476ece511c"
const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

export default {
    getArticles: function(topic, start, end){
        return axios.get(url + "?q=" + topic + "&?begin_date=" + start + "&?end_date=" + end + key )
    },

    postArticles: (id, title) => {
        return axios.post("/api/articles/" + id, title)
    },

    getSaves: () => {
        return axios.get("/api/articles/")
    }
}