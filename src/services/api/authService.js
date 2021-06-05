import Axios from "axios";
import { setJwt, unsetJwt } from "../jwt";

const url = "https://localhost:50001/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data);

        setJwt(result.data.message);

        // var user = await ProfileService.GetOwnProfile();

        // localStorage.setItem("username", user.username)

        return result.data;
    }

    async Logout(){
        unsetJwt();
    }
}

export default new AuthService();