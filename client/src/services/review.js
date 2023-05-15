import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/review'

const newToken = localStorage.getItem("token");
console.log(newToken)
const token = `bearer ${newToken}`
const config = {headers: {Authorization: token}}

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = (reviewObject) => {
    const req = axios.post(baseUrl, reviewObject, config)
    return req.then(res => res.data)
    }

export { getAll, create }
