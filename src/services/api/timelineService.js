import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/timeline/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class TimelineService {
    async GetTimelineTweets(){
        var result = await Axios.get(url+ "timeline", config);

        return result.data.data;
    }
}

export default new TimelineService();