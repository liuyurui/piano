// pages/home/home.js
var gita_good_list = [{
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg'
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg'
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg'
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg'
}, {
  url: 'https://img14.360buyimg.com/n0/jfs/t14941/9/2474527043/174888/9bfa949b/5aa0dc56N6b15ceba.jpg'
}]

Page({
    /**
   * 页面的初始数据
   */
  data: {
    categories: ["民谣吉他", "钢琴", "古筝", "二胡", "笛子", "更多"],
    currentPosition: 0,
    goods_list: gita_good_list,
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

  /**
   * 点击分类
   */
  tabClick: function(e) {
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