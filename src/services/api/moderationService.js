import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/moderation/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class Moderation {
    async GetPendingTweets(){
        var result = await Axios.get(url + "pending", config)
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

    async GetApprovedTweets(){
        var result = await Axios.get(url + "approved", config)
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

    async GetUnapprovedTweets(){
        var result = await Axios.get(url + "unapproved", config)
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

    async ApproveTweet(id){
        var result = await Axios.put(url + "approve/" + id, null, config)
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

    async UnapproveTweet(id){
        var result = await Axios.put(url + "unapprove/" + id, null, config)
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

export default new Moderation();