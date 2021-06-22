import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/follow/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class FollowService {
    async FollowUser(id){
        var result = await Axios.post(url + "follow", {
            id: id
        }, config);

        return result.data;
    }

    async UnFollowUser(id){
        var result = await Axios.delete(url + id, config);

        return result.data;
    }

    async CheckIfFollows(id){
        var result = await Axios.get(url + id, config);

        return result.data.data;
    }

    async GetFollowCounts(id){
        var result = await Axios.get(url + "count/" + id, config)

        return result.data.data;
    }
}

export default new FollowService();