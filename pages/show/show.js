// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showitems: [{
      cover: "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/shop/shop1.jpg",
      title: "琴行展示",
      desc: "琴行内有两层，共有180多平方。一楼设有乐器展厅，隔音的教学房，练琴房，鼓房；二楼设有两间综合大教室。是永新综合实力最强，规模最大的琴行之一。",
      images: ["http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/shop/shop1.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/shop/sjop2.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/shop/shop3.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/shop/shop.jpg"],
    }, {
      cover: "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/teach/teach1.jpg",
      title: "教学展示",
      desc: "琴行设有暑假，寒假，周末培训班；吉他班，书法班，蜡笔画班，国画班，素描班。",
      images: ["http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/teach/teach1.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/teach/teach2.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/teach/teach3.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/teach/teach4.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting7.jpg"],
      }, {
        cover: "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act1.jpg",
        title: "表演展示",
        desc: "琴行聘请了专业的器乐，声乐，书法，绘画教师；集乐器p培训，销售,琴棋书画艺术培训于一体，为广大青少年学子提供了一个学习和交流的艺术平台。",
        images: ["http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act1.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act2.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act3.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act4.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act5.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act6.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act7.jpg",
          "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/show/act8.jpg"],
      }, {
      cover: "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting1.jpg",
      title: "书法展示",
      desc:"以毛笔书法为主，硬笔书法为辅。培养良好书写习惯，为提高学习成绩和今后走上工作岗位打下良好基础。",
      images: ["http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting1.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting2.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting3.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting4.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting5.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/handwriting/handwriting6.jpg"],
    }, {
      cover: "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting1.jpg",
      title: "绘画展示",
      desc: "开设有国画，素描，蜡笔，国画。学习绘画基础和构图、题款、用笔、用墨、用色、用水等技巧。同时结合孩子兴趣在传统文化中融入现代趣味。",
      images: ["http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting1.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting2.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting3.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting4.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting5.jpg",
        "http://zhiyinpiano.oss-cn-beijing.aliyuncs.com/gain/painting/painting6.jpg"],
    }],
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
  
  },

  showMore: function(e) {
    wx.previewImage({
      urls: e.currentTarget.dataset.src,
    });
  }
})