import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/profile/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class ProfileService {
    async GetProfileByUsername(username){
        var result = await Axios.get(url + username, config);

        return result.data.data;
    }
}

export default new ProfileService();