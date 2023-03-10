// pages/demo2/audio/audio.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        poster:'https://y.qq.com/music/photo_new/T002R300x300M000001U6x8f2uJhig_1.jpg?max_age=2592000',
        name:'黄昏',
        author:'周传雄',
        src:'http://dl.stream.qqmusic.qq.com/RS02061nB4ss05HvTC.mp3?guid=2800492380&vkey=49DD713A61DEFC0B9DCF3B5CC79647A107C71D3E2C87AA33A2EE6946657CFF9066A85012CDF9EBE74505FB938813A735646242775911F48B&uin=2452668867&fromtag=66'
    },
    audioPlay: function(options){
        this.audioCtx.play()
    },
    audioPause:function(options){
        this.audioCtx.pause()
    },
    audioSeek0:function(options){
        this.audioCtx.seek(0)
    },
    onReady: function(){
        this.audioCtx = wx.createAudioContext('myAudio')
    },
})