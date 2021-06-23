import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/profile/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class ProfileService {
    async GetProfileByUsername(username){
        var result = await Axios.get(url + username, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 404){
                toast.error("Could not find profile.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result.data;
    }

    async GetOwnProfile(){
        var result = await Axios.get(url + "@me", config);

        return result.data.data;
    }

    async EditProfile(data){
        var result = await Axios.put(url + "edit", data, config)
        .then(result => {
            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
                throw error;
            }
            if(error.response.status === 403){
                toast.error("You are not allowed to edit this user.");
                throw error;
            }
            if(error.response.status === 400 || error.response.status === 502){
                toast.error("Something went wrong.");
                throw error;
            }
            throw error;
        });
        return result.data;
    }
}

export default new ProfileService();