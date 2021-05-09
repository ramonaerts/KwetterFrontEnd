import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/tweet/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class TweetService {
    async GetOwnTweets(){
        var result = await Axios.get(url + "tweets", config);

        return result.data.data;
    }

    async GetProfileTweets(id){
        var result = await Axios.get(url + id, config);

        return result.data.data;
    }

    async SendTweet(data){
        var result = await Axios.post(url + "create", data, config);

        return result.data;
    }
}

export default new TweetService();