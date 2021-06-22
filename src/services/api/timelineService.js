import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/timeline/";

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