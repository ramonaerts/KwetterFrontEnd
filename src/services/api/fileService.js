import Axios from "axios";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/file/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class FileService {
    async EditProfileImage(image){
        var result = await Axios.post(url + "edit", {
            image: image
        }, config);

        return result.data;
    }
}

export default new FileService();