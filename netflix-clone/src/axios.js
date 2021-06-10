import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
//every time u call instance.get('a/sd/...') it returns baseUrl+'a/sd/...'
export default instance;