import axios from 'axios';


 const instance = axios.create({
    baseURL : 'https://react-my-burger-a600a.firebaseio.com/'
})


export default instance;