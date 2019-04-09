import axios from 'axios'
import RequestHost from './requestHost'
import {headers, formData} from './config'
import Qs from 'qs'
function initInstance (instance, format) {
  if (format) {
    instance.defaults.headers = format
  } else {
    instance.defaults.headers = formData
  }
  instance.interceptors.request.use((request) => {
    if (request.data && request.headers['Content-Type'] === formData['Content-Type']) request.data = Qs.stringify(request.data)
    return request
  })
  instance.interceptors.response.use(response => {
    let { data, status } = response
    if (status === 200) {
      if (data.state == 0) {
        // if(data.msg)window.vm.$toast.success(data.msg)
      } else {
        if (data.msg)console.log(data.msg)
      }
      return data
    } else {
      console.log(data.msg)
    }
  }, error => {
    console.log('error~~~~~~~~~~~~~~~~~~~~~~~~~')
    // window.vm.$message.error({message: '请求失败',showClose: true});
    console.log('请求失败')
  })
  instance.postJson = (url, params = {}) => instance.post(url, params, {headers})
}
const API_HOST = RequestHost.getApiHost('m.jiecai8')

const H5 = RequestHost.getApiHost('m.jiecai8')
RequestHost.getUploadHost()

export const http = axios.create({
  baseURL: API_HOST
})
initInstance(http)
export const $ = axios.create({
  baseURL: H5
})
initInstance($)
