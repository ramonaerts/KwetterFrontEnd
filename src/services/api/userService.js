import Axios from "axios";
import { getJwt } from "../jwt";

const url = "https://localhost:50001/api/user/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class UserService {
    async Register(data){
        var result = await Axios.post(url + "register", data);

        return result.data;
    }

    async ForgetUser(){
        var result = await Axios.delete(url + "forget", config);

        return result.data;
    }
}

export default new UserService();