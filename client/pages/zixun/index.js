Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /**
   * 测试websocket
   */
  test:function (){
    wx.connectSocket({
      url: 'wss://y2a2ok2i.ws.qcloud.la/data.php'
    })

    wx.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
    })
  },
  /**
 * 测试websocket
 */
  login: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({//getUserInfo流程
            success: function (res2) {//获取userinfo成功
              console.log(res2);
              var encryptedData = encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
              var iv = res2.iv;
              //请求自己的服务器
             
            }
          })
          
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})