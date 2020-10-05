import date from '../utils/date';
import {NEWS_API_DAYS, NEWS_API_TOKEN, NEWS_API_URL} from "../constants/config";

class NewsApi {
    constructor(url, token, apiDays) {
        this.url = url;
        this.authorization = token;
        this.fromDate = date.daysAgo(apiDays);
        this.toDate = date.now();
    }

    getNews(keyWord) {
        return fetch(`${this.url}q=${keyWord}&from=${this.fromDate}&to=${this.toDate}&sortBy=popularity&pageSize=20&apiKey=${this.authorization}`);
    }
}

export const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_TOKEN, NEWS_API_DAYS)