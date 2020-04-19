import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

axios.defaults.headers.common = {
    Accept: 'application/json, application/xml, text/play, text/html, *.*',
    'Content-Type': 'application/json; charset=UTF-8',
}

export default axios
