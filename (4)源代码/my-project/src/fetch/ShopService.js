
let getShopCartListByUser = function (cb) {
  fetch('http://10.35.166.13:3000/tasks/api/:goodsapi').then(response => {
    response.json().then(data => {
      cb(data.data)
    })
  })
}

module.exports = {
  getShopCartListByUser: getShopCartListByUser
}
