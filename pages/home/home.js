// pages/home/home.js
var gita_good_list = [{
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg',
  title: '卢森（Rosen） 卢森Rosen吉他民谣木吉它40寸41寸初学者乐器guitar R-135黑色 41寸',
  price: '￥233.00',
  goodid: ''
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg',
  title: '卢森（Rosen） 卢森Rosen吉他民谣木吉它40寸41寸初学者乐器guitar R-135黑色 41寸',
  price: '￥233.00',
  goodid: ''
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg',
  title: '卢森（Rosen） 卢森Rosen吉他民谣木吉它40寸41寸初学者乐器guitar R-135黑色 41寸',
  price: '￥233.00',
  goodid: ''
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg',
  title: '卢森（Rosen） 卢森Rosen吉他民谣木吉它40寸41寸初学者乐器guitar R-135黑色 41寸',
  price: '￥233.00',
  goodid: ''
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg',
  title: '卢森（Rosen） 卢森Rosen吉他民谣木吉它40寸41寸初学者乐器guitar R-135黑色 41寸',
  price: '￥233.00',
  goodid: ''
}];
var allGoods = [];
allGoods.push({
  tag: 'gita',
  goods: gita_good_list
});

Page({
    /**
   * 页面的初始数据
   */
  data: {
    categories: [{tag: 'gita', name: "民谣吉他"}, 
      {tag: 'piano', name: "钢琴"}, 
      {tag: 'guzheng', name: "古筝"}, 
      {tag: 'erhu', name: "二胡"}, 
      {tag: 'flute', name: "笛子"}, 
      {tag:'more', name: "更多"}],
    currentPosition: 0,
    goods_list: allGoods[0].goods,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求网络数据
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://api.chinaamc.com',
      data: {

      },
      method: 'POST',
      success: function(res) {

      },
      fail: function(res) {
        console.log(res)
      },
      complete: function() {
        wx.hideNavigationBarLoading();
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
  
  },

  /**
   * 点击分类
   */
  tabClick: function(e) {
    console.log(e.currentTarget.dataset.tag),
    this.setData({
      currentPosition: e.currentTarget.id,
      goods_list: [],
    });
  },

  clickGood: function() {
    wx.navigateTo({
      url: '/pages/gooddetail/gooddetail',
    })
  }
})