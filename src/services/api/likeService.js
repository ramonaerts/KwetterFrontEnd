import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/like/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class LikeService {
    async GetLikes(id){
        var result = await Axios.get(url + id, config);

        return result.data.data;
    }

    async LikeTweet(id){
        var result = await Axios.post(url + id, null,  config);

        return result.data.data;
    }

    async UnlikeTweet(id){
        var result = await Axios.delete(url + id, config);

        return result.data.data;
    }
}

export default new LikeService();