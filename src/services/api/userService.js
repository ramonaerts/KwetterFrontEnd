import Axios from "axios";

const url = "https://localhost:50001/api/user/";

class UserService {
    async Login(data){
        var result = await Axios.post(url + "register", data);

        return result.data;
    }
}

export default new UserService();