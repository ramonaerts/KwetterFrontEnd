import Axios from "axios";

const url = "https://localhost:5001/api/tweet/";

class TweetService {
    async GetOwnTweets(){
        var result = await Axios.get(url + "tweets");

        console.log("here?");
        console.log(result);

        return result.data.data;
    }
}

export default new TweetService();