import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = (credentials) => {
    const req = axios.post(baseUrl, credentials)
    return req.then(res => res.data.token)
}

export { login }