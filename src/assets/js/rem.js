// rem.js
window.onload = function () {
  /* 375设计稿的宽度，100代表换算比例，100px=1rem */
  getRem(375, 100)
}
window.onresize = function () {
  getRem(375, 100)
}

function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = (oWidth / pwidth) * prem + 'px'
}
