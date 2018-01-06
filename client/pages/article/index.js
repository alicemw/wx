Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    content:null,
    title:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      name:options.name,
      title:options.arttitle
    })
    console.log(options);
    this.getArticleData(options);
    
  },
  back: function () {
    wx.navigateBack();
  },
    /**
   * 获取文章内容
   */
  getArticleData:function(options){
    var that = this;
    wx.request({
      url: 'https://y2a2ok2i.qcloud.la/articledata.php',
      data:{
        id:options.artid,
        typeid:options.id
      },
      success:function (res) {
      
        //图片拼接
        let str = res.data[0].body;
        res.data[0].body = str.replace(/\/uploads/g, "http://m.0832pifu.com/uploads");
        that.setData({
          content:res.data[0].body
        })
        var WxParse = require('../../wxParse/wxParse.js');
        WxParse.wxParse('articlebody', 'html', res.data[0].body, that, 5);
      }
    })
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