import axios from 'axios';

const api = axios.create({
    baseURL: 'http://z6-a8v.anonymous.mobile.exp.direct:3333'
});

export default api;