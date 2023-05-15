import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/singup'

const singup = (creds) => {
    const req = axios.post(baseUrl, creds)
}

export { singup }