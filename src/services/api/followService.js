import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/follow/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class FollowService {
    async FollowUser(id){
        var result = await Axios.post(url + "follow", {
            id: id
        }, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 404 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result;
    }

    async UnFollowUser(id){
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
        return result;
    }

    async CheckIfFollows(id){
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

    async GetFollowCounts(id){
        var result = await Axios.get(url + "count/" + id, config)
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

export default new FollowService();