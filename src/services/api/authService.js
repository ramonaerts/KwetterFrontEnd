import Axios from "axios";
import { setJwt } from "../jwt";

const url = "https://localhost:50001/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data);

        setJwt(result.data.message);

        return result.data;
    }

    async Login(data){
        var result = await Axios.post(url + "register", data);

        return result.data;
    }
}

export default new AuthService();