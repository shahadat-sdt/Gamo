import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '7d52f6490ba44d6d9108d17f667cd468'
    },
    // headers: {
    //     'Client-Id': "j7dvhe7yqt9mv6yqlluxdjk24tx727",
    //     Authorization: "Bearer 214vz0wfpqou7eisevh5g7tp0bcenq"
    // }
})