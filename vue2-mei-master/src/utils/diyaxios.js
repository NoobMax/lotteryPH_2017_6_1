import axios from 'axios'
axios.defaults.timeout = 100000

// code状态码0判断  0 成功
axios.interceptors.response.use((res) => {
    // if (res.data.code !== 200) {
    //     return Promise.reject(res)
    // }
    return res
}, (error) => {
    return Promise.reject(error)
})
export default axios