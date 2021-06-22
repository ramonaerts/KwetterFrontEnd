import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/moderation/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class Moderation {
    async GetPendingTweets(){
        var result = await Axios.get(url + "pending", config);

        return result.data.data;
    }

    async GetApprovedTweets(){
        var result = await Axios.get(url + "approved", config);

        return result.data.data;
    }

    async GetUnapprovedTweets(){
        var result = await Axios.get(url + "unapproved", config);

        return result.data.data;
    }

    async ApproveTweet(id){
        var result = await Axios.put(url + "approve/" + id, null, config);

        return result.data.data;
    }

    async UnapproveTweet(id){
        var result = await Axios.put(url + "unapprove/" + id, null, config);

        return result.data.data;
    }
}

export default new Moderation();