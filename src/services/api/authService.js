import Axios from "axios";
import { toast } from "react-toastify";
import { setJwt, unsetJwt } from "../jwt";

const url = "http://20.84.34.70/api/auth/";

class AuthService {
    async Login(data){
        var result = await Axios.post(url + "login", data)
            .then((result) => {
                setJwt(result.data.message);

                localStorage.setItem("username", result.data.data.username)        
                toast.success("Login successfull.");

                return result.data;
            })
            .catch(function (error) {
                if(error.response === undefined) {
                    toast.error("Connection timed out, try again later.");
                    throw error;
                }
                if(error.response.status === 403){
                    toast.error("Make sure you have entered the correct data.");
                    throw error;
                }
                if(error.response.status === 400 || error.response.status === 502){
                    toast.error("Something went wrong.");
                    throw error;
                }
                throw error;
            });   
        return result;
    }

    async Logout(){
        unsetJwt();

        localStorage.setItem("username", "undefined")
    }
}

export default new AuthService();