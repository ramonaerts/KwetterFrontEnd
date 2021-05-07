import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/follow/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class ProfileService {
    async FollowUser(id){
        var result = await Axios.post(url + "follow", id, config);

        return result.data.data;
    }

    async UnFollowUser(id){
        var result = await Axios.delete(url + id, config);

        return result.data.data;
    }

    async CheckIfFollows(id){
        var result = await Axios.get(url + id, config);

        return result.data.data;
    }
}

export default new ProfileService();