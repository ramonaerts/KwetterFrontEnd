import Axios from "axios";
import { setJwt } from "../jwt";

const url = "https://localhost:5001/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data);

        setJwt(result.data.message);

        return result.data;
    }
}

export default new AuthService();