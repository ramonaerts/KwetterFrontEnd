import Axios from "axios";
import { setJwt } from "../jwt";
import ProfileService from "../api/profileService";

const url = "https://localhost:50001/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data);

        setJwt(result.data.message);

        // var user = await ProfileService.GetOwnProfile();

        // localStorage.setItem("username", user.username)

        return result.data;
    }
}

export default new AuthService();