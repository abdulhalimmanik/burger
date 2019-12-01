import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-app-7520f.firebaseio.com/'
})

export default instance