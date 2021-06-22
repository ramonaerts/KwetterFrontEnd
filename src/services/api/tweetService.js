import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/tweet/";

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

    async DeleteTweet(tweetId){
        var result = await Axios.delete(url + tweetId, config)

        return result.data;
    }
}

export default new TweetService();