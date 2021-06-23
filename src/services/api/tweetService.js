import Axios from "axios";
import { toast } from "react-toastify";
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
        var result = await Axios.get(url + id, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result.data;
    }

    async SendTweet(data){
        var result = await Axios.post(url + "create", data, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result.data;
    }

    async DeleteTweet(tweetId){
        var result = await Axios.delete(url + tweetId, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 404){
                toast.error("Could not find tweet.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result.data;
    }
}

export default new TweetService();