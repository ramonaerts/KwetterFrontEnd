import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/file/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class FileService {
    async EditProfileImage(data){
        var result = await Axios.post(url + "edit", data, config);

        return result.data;
    }
}

export default new FileService();