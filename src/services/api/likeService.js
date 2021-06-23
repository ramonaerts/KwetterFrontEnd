import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/like/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class LikeService {
    async GetLikes(id){
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

    async LikeTweet(id){
        var result = await Axios.post(url + id, null,  config)
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

    async UnlikeTweet(id){
        var result = await Axios.delete(url + id, config)
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
}

export default new LikeService();