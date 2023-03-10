Page({
    data: {
        isDownload: false
    },
    //下载图片文件
    download: function(){
        var that=this
        //开始下载
        var downloadTask=wx.downloadFile({
          url: 'https://i0.hdslb.com/bfs/face/cb49e8804447945761979822437f76a9eabce318.jpg@240w_240h_1c_1s.webp',
          success: function(res){
              if(res.statusCode===200){
                  let src=res.tempFilePath
                  that.setData({
                      src: src,
                      isDownload: true
                  })
              }
          }
        })
        //任务对象监听下载进度
        downloadTask.onProgressUpdate((res)=>{
            console.log('下载进度',res.progress)
            console.log('已经下载的数据长度',res.totalBytesWritten)
            console.log('预期需要下载的数据总长度',res.totalBytesExpectedToWrite)
        })
    },
    //清空下载图片
    reset: function(){
        this.setData({
            src: '',
            isDownload:false
        })
    }
})