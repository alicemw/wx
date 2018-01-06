// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'',
      id:0,
      articlelist:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:options.name,
      id:options.id
    })
    wx.setNavigationBarTitle({
      title: options.name
    });
    this.getArticle(options);
   
  },
  back: function () {
    wx.navigateBack();
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
  
  },
  telphone:function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  getArticle:function(options){
    var that =this;
    wx.getStorage({
      key: options.name,
      success: function(res) {
      
        that.setData({
          articlelist:JSON.parse(res.data)
        })
       
      },
      fail:function(res){
           wx.request({
            url: 'https://y2a2ok2i.qcloud.la/data.php',
            data:{
              name:options.name,
              id:options.id
            },
            success: function (res) {
              for(let i=0;i<res.data.length;++i){
                //图片url拼接
                if(res.data[i].litpic!=''){
                  res.data[i].litpic = 'http://m.0832pifu.com' + res.data[i].litpic;
                }else {
                  res.data[i].litpic = 'http://m.0832pifu.com/images/defaultpic.gif';
                }
                
                //描述字数控制
                res.data[i].description = res.data[i].description.substr(0, 20);
              }
              that.setData({
                articlelist:res.data
              });
              
              wx.setStorage({
                key: options.name,
                data: JSON.stringify(res.data)
              })
            }
          })
      }
    })
  }

})