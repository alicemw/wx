Page({
  data: {
    datalist:'',
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    imgUrls:[
      '../images/banner.png',
      '../images/banner.png',
      '../images/banner.png'
    ],
    img2Urls:[
      'http://m.0832pifu.com/uploads/allimg/160513/1-160513203602I4.jpg',
      'http://m.0832pifu.com/uploads/allimg/170413/1-1F4131411390-L.jpg'
    ]

  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://y2a2ok2i.qcloud.la/listdata.php',
      success: function (res) {
        console.log(res);
        that.setData({
          datalist: res.data
        })
    
      }
    })
    
  },
  back:function(){
    wx.navigateBack
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  dacall:function(){
    wx.makePhoneCall({
      phoneNumber: '0832-5197777'
    })
  },
  onShareAppMessage:function(){
    return {
      title: '内江和润皮肤病医院',
      desc: '内江和润皮肤病医院!',
      path: '/pages/index/index'
    }
  }
})