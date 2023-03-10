
Page({
  
    data: {
        result:'待查询'
    },
    word: '',
    wordBlur: function (e) {
        this.word=e.detail.value
    },
    search: function(){
        let word = this.word
        var that = this
        if(word==''){
            wx.showToast({
              title: '单词不能为空！',
              icon: 'none'
            })
        }
        else{
            wx.request({
                url: 'http://fanyi.youdao.com/translate?&doctype=json&type=AUTO',
                data: {
                    i: this.word
                },
                success: function(res){
                    console.log(res.data)
                    let result = res.data.translateResult[0][0].tgt
                    that.setData({result: result})
                }
            })
        }
    }
  })