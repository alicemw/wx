Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    avatar:'',
    encryptedData:'',
    iv:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.login({
      success: function (res) {
        console.log(res);
        var code = res.code;
        wx.showToast({
          title: '正在登录',
          icon: 'loading',
          duration: 10000
        })

        wx.getUserInfo({
          success:function(res1){
            that.setData({
              name:res1.userInfo.nickName,
              avatar:res1.userInfo.avatarUrl
            })

            //请求服务器
            wx.request({
              url: 'https://y2a2ok2i.qcloud.la/demo.php',
              data: {
                code: code,
                encryptedData: that.data.encryptedData,
                iv: that.data.iv
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res1) {
                wx.hideToast();
                console.log('服务器返回:' + res1.data)
              }
            })
          }
        })
        
      }
    })
  },
  /**
   * 获取电话号码
   */
  getphonenumber:function(e){
    console.log(e);
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