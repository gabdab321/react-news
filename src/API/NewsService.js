import {ACCESS_KEY} from "../config";

export default class NewsService {
    static async getNews(category, limit, offset) {
        const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${ACCESS_KEY}&countries=ua,us,gb&categories=${category}&limit=${limit}&offset=${offset}`)

        if(response.status !== 200) throw new Error("bad response status")

        return await response.json()
    }
}