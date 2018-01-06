Page({
 getCenterLocation:function (){
   wx.getLocation({
     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
     success: function (res) {
       var latitude = res.latitude
       var longitude = res.longitude
       wx.openLocation({
         latitude: latitude,
         longitude: longitude,
         scale: 28
       })
     }
   })
 },
 click: function (e) {
   wx.openLocation({
     latitude: 29.598530,
     longitude: 106.518240,
     scale: 18,
     name: '重庆迪邦皮肤病医院',
     address: '重庆市新牌坊松牌路523号'
   })
 },
  onLoad:function (options){
    wx.setTopBarText({
      text: 'hello, world',
      success:function(res){
        console.log(1)
      },
      fail:function(res){
        console.log(2)
      }
    })
    wx.showNavigationBarLoading()
  },
  pay:function(){
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log(1);
      },
      'fail': function (res) {
        console.log(2)
      }
    })
  }
})