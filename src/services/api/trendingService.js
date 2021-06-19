import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/trending/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class TrendingService {
    async GetTopTrends(){
        var result = await Axios.get(url + "top", config);

        console.log(result.data);

        return result.data.data;
    }
}

export default new TrendingService();