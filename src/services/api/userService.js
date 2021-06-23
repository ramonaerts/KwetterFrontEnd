import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/user/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class UserService {
    async Register(data){    
        var result = await Axios.post(url + "register", data)
        .then(result => {      
            toast.success("Registration successfull.");

            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 304){
                toast.error("This email is already in use.");
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

    async ForgetUser(){
        var result = await Axios.delete(url + "forget", config)
        .then(result => {      
            toast.success("Account successfully deleted.");

            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 404 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result;
    }
}

export default new UserService();