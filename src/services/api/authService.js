import Axios from "axios";
import { setJwt, unsetJwt } from "../jwt";

const url = "http://20.84.34.70/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data);

        setJwt(result.data.message);

        localStorage.setItem("username", result.data.data.username)

        return result.data;
    }

    async Logout(){
        unsetJwt();

        localStorage.setItem("username", "undefined")
    }
}

export default new AuthService();