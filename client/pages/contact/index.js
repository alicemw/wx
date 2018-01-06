Page({
  data: {
    title:'',
    name:'',
    markers: [{
      iconPath: "/pages/images/mapicon.png",
      id: 0,
      latitude: 29.576990,
      longitude: 105.041700,
      width: 30,
      height: 30,
      title:'内江和润皮肤病医院',
      callout:{
        content:'内江和润皮肤病医院\n地址：内江市双苏路126号',
        padding:5,
        borderRadius:10,
        color:'#f00',
        display:'ALWAYS'
      }
    }],
    polyline: [{
      points: [{
        longitude: 105.041710,
        latitude: 29.576980
      }, {
          longitude: 105.041690,
        latitude: 29.576995
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/pages/images/click.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  back: function () {
    wx.navigateBack();
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function (options) {
    this.setData({
      title:options.name,
      name: options.name
    })

  },
  click: function (e) {
    wx.openLocation({
      latitude: 29.576990,
      longitude: 105.041700,
      scale: 18,
      name: '内江和润皮肤病医院',
      address: '内江市双苏路126号'
    })
  }
  
})