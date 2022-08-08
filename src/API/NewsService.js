import {ACCESS_KEY} from "../config";

export default class NewsService {
    static async getGeneralNews() {
        const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${ACCESS_KEY}&countries=ua,us,gb`)

        console.log(response)
        if(response.status !== 200) throw new Error("bad response status")

        const json = await response.json()
        return json.data
    }
}