import Axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../jwt";

const url = "http://20.84.34.70/api/file/";

const config = {
    headers: {Authorization: `Bearer ${getJwt()}`}
}

class FileService {
    async EditProfileImage(image){
        var result = await Axios.post(url + "edit", {
            image: image
        }, config)
        .then(result => {      
            toast.success("Profile image successfully changed.");

            return result.data;
        })
        .catch(function (error) {
            if(error.response === undefined) {
                toast.error("Connection timed out, try again later.");
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
}

export default new FileService();