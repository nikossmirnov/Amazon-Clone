import axios from 'axios'

const instance = axios.create({
    baseURL: '...' // api url(cloud)
})

export default instance;