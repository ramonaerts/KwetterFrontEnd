import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/trending/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class TrendingService {
    async GetTopTrends(){
        var result = await Axios.get(url + "top", config);

        return result.data.data;
    }
}

export default new TrendingService();