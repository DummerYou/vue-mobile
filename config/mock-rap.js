
const config = {}


config['/fhs'] = {
	target:'http://172.16.12.81:8933',
	changeOrigin: true
}
config['/ygy'] = {
	target:'http://ygy.paat.org',
	changeOrigin: true
}
config['/file'] = {
	target:'http://fileserver.jieshui8.net',
	changeOrigin: true
}


module.exports = config
