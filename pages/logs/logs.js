// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    info:[
      "flex-direction的用法",
      "flex-wrap的用法",
      "justify-content的用法",
      "align-items的用法",
      "align-content的用法",
      "align-self的用法"
    ]
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  goto(e) {
    var value = e.currentTarget.dataset
    var id = value.id
    if(id==0){
      wx.navigateTo({
        url: '/pages/demo1/flex-direction/flex-direction',
      })
    }
    if(id==1){
      wx.navigateTo({
        url: '/pages/demo/flex-wrap/flex-wrap',
      })
    }
    if(id==2){
      wx.navigateTo({
        url: '/pages/demo/justify-content/justify-content',
      })
    }
    if(id==3){
      wx.navigateTo({
        url: '/pages/demo/align-items/align-items',
      })
    }
    if(id==4){
      wx.navigateTo({
        url: '/pages/demo/align-content/align-content',
      })
    }
    if(id==5){
      wx.navigateTo({
        url: '/pages/demo/align-self/align-self',
      })
    }
  }
})
