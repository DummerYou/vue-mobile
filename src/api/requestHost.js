class RequestHost {
  constructor (options) {
    this.url = options.url
    this.upload = options.upload
    this.defaults = {
      host: 'http://m.jiecai8.com/'
    }
    this.dev = true
    if (typeof this.url === 'string') {
      if (this.upload) {
        this.getUploadHost(this.upload)
      } else {
        this.getApiHost(this.url)
      }
    }
  }

  getApiHost (url) {
    const ary = ['.org', '.net', '.work', '.com']
    for (var i = 0; i < ary.length; i++) {
      if (window.location.hostname.includes(ary[i])) {
        this.dev = false
        return `http://${url}${ary[i]}`
      }
    }
    if (this.dev) return this.defaults.host
  }

  getUploadHost (env = 'net') {
    ['.org', '.net', '.work', '.com'].find(item => {
      if (window.location.hostname.includes(item)) {
        window.fileUpload = ``
        this.dev = false
      }
    })
    if (this.dev) {
      window.fileUpload = `${this.defaults.host}/file/upload/`
    }
  }
}
export default new RequestHost({})
